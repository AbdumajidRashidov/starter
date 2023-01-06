import { fetchUtils } from "react-admin";
import * as conf from "../config.json";
// import authService from '../services/authService';
// import { stringify } from 'query-string'
let { API_URL, IMG_DOMAIN, SELF_DOMAIN } = conf;
const httpClient = async (url, options = {}) => {
  if (!options.headers) {
    options.headers = new Headers({ Accept: "application/json" });
  }
  // const token = await authService.getAccessToken();
  // options.headers.set('Authorization', `Bearer ${token}`);
  return await fetchUtils.fetchJson(url, options);
};

const localizables = [
  { resource: "areas" },
  // { resource: 'catalogs', idField: 'catalogId' },
  // { resource: 'stores', idField: 'storeId' },
];

const imageSrcable = [
  { resource: "products", imgFields: ["imageSrc", "images"] },
  { resource: "stores", imgFields: ["logoSrc"] },
  { resource: "catalogs", imgFields: ["imageSrc", "bannerSrc", "iconSrc"] },
];

// const locales = ['ru', 'en'];

const api = {
  locales: [],
  assignToFieldOrArray: function (obj, field, i, v) {
    if (obj[field] && Array.isArray(obj[field])) {
      obj[field][i] = v;
    } else {
      obj[field] = v;
    }
  },
  convertToFile: function (resource, entity) {
    const res = imageSrcable.find((item) => item.resource === resource);
    const promises = [];
    if (res) {
      for (const imgField of res.imgFields) {
        const f = entity[imgField];
        const files = Array.isArray(f) ? f : [f];
        entity[imgField] = Array.isArray(f) ? [] : null;
        for (const [i, url] of files.entries()) {
          if (!url) continue;
          let fileUrl = url[0] === "/" ? SELF_DOMAIN + url : url;
          promises.push(
            fetch(fileUrl)
              .then((f) => f.blob())
              .then((b) => new File([b], url))
              .then((file) =>
                api.assignToFieldOrArray(entity, imgField, i, file)
              )
          );
        }
      }
    }

    if (!promises.length) {
      console.log("no promises");
      return Promise.resolve();
    }
    return Promise.all(promises);
  },
  recordAsImage: function (resource, entity) {
    const res = imageSrcable.find((item) => item.resource === resource);
    const promises = [];
    if (res) {
      for (const imgField of res.imgFields) {
        if (imgField === "images") {
          debugger;
        }
        const f = entity[imgField];
        if (!f) continue;
        const files = Array.isArray(f) ? f : [f];
        entity[imgField] = Array.isArray(f) ? [] : null;
        for (const [i, ent] of files.entries()) {
          const file = ent.rawFile || ent;
          if (
            file instanceof File ||
            (typeof file === "object" && file && file.src)
          ) {
            const src = file.name || file.src;
            if (src.startsWith("/")) {
              api.assignToFieldOrArray(entity, imgField, i, src);
              continue;
            }
            if (src.startsWith(IMG_DOMAIN)) {
              api.assignToFieldOrArray(
                entity,
                imgField,
                i,
                src.substring(IMG_DOMAIN.length)
              );
              continue;
            }
            if (!(file instanceof File)) {
              continue;
            }
            const p = new Promise((res, rej) => {
              const fr = new FileReader();
              fr.onload = () => {
                api.assignToFieldOrArray(entity, imgField, i, fr.result);
                res();
              };
              fr.onerror = (err) => {
                console.error(err);
                rej();
              };
              fr.readAsDataURL(file);
            });
            promises.push(p);
          }
        }
      }
    }

    if (!promises.length) {
      console.log("no promises");
      return Promise.resolve();
    }
    return Promise.all(promises);
  },
  generateLocalizations: function (resource, entity) {
    const res = localizables.find((item) => item.resource === resource);
    if (!res) {
      return entity;
    }
    entity.locales = entity.locales || [];
    // const locales = this.locales;
    for (const loc of this.locales) {
      if (!entity.locales.find((e) => e.localeKey === loc.key)) {
        const x = { localeKey: loc.key };
        if (entity.id && res.idField) {
          x[res.idField] = entity.id;
        }
        entity.locales.push(x);
      }
    }

    return entity;
  },

  getList: async function (
    r,
    { pagination: { page, perPage }, sort: { field, order }, filter }
  ) {
    console.log("FILTER", filter);
    let { q, type, ...params } = filter;
    let resource = r.indexOf("search/") === 0 ? r.substring(7) : r;
    console.log("getList", arguments);
    if (typeof q !== "undefined" && (!q || q.length <= 3)) {
      return {
        data: [],
        total: 2000,
      };
    }
    let url = `${API_URL}/${resource}`;
    if (type) {
      url += "/" + type;
    }
    // console.log('RESOURCE', resource)
    url = `${url}?page=${page}&perPage=${perPage}&order=${order}:${field}`;

    if (q) {
      url += `&q=${q}`;
    }
    for (const paramName in params) {
      if (params.hasOwnProperty(paramName)) {
        const paramValue = params[paramName];
        url += `&${paramName}=${paramValue}`;
      }
    }
    // console.log(url)

    let { json } = await httpClient(url);
    // console.log(json)
    const res = [];
    for (const entity of json) {
      // if(search) {
      // 	await api.convertToFile(resource, entity);
      // }
      res.push(api.generateLocalizations(resource, entity));
    }
    return {
      data: res,
      total: 2000,
    };

    // const { page, perPage } = params.pagination
    // const { field, order } = params.sort
    // const query = {
    //     sort: JSON.stringify([field, order]),
    //     range: JSON.stringify([(page - 1) * perPage, page * perPage - 1]),
    //     filter: JSON.stringify(params.filter),
    // }
    // const url = `${apiUrl}/${resource}?${stringify(query)}`
    // return httpClient(url).then(({ headers, json }) => ({
    // data: json,
    // total: parseInt(headers.get('content-range').split('/').pop(), 10),
    // }))
  },
  getOne: function (resource, params) {
    return httpClient(`${API_URL}/${resource}/${params.id}`).then(
      async ({ json }) => {
        // await api.convertToFile(resource, json);
        // console.log('JJJJJSON', json['imageSrc']);
        return {
          data: api.generateLocalizations(resource, json),
        };
      }
    );
  },

  getMany: function (r, { ids, filter: { q, type } = {} }) {
    console.log("getMany", arguments);
    let resource = r.indexOf("search/") === 0 ? r.substring(7) : r;

    let url = `${API_URL}/${resource}`;
    if (type) {
      url += "/" + type;
    }
    url = `${url}?ids=${ids.join(",")}`;
    if (q) {
      url += `&q=${q}`;
    }
    return httpClient(url).then(({ json }) => ({ data: json }));
  },
  getManyReference: function (
    r,
    { target, id, filter: { q, type, ...rest } = {} }
  ) {
    console.log("getManyReference", arguments);
    let resource = r.indexOf("search/") === 0 ? r.substring(7) : r;

    let url = `${API_URL}/${target}/${id}/${resource}`;
    if (type) {
      url += "/" + type;
    }
    rest ||= {};
    url = `${url}?filter=` + JSON.stringify(rest);
    if (q) {
      url += `&q=${q}`;
    }
    return httpClient(url).then(({ json }) => ({ data: json, total: 2000 }));
  },

  create: async (resource, params) => {
    console.log("CREATE", resource, JSON.stringify(params));
    await api.recordAsImage(resource, params.data);
    const data = params.data;
    const { json } = await httpClient(`${API_URL}/${resource}`, {
      method: "POST",
      body: JSON.stringify(data),
    });
    return {
      data: json, // { ...data, id: json.id },
    };
  },

  update: async (resource, params) => {
    await api.recordAsImage(resource, params.data);
    const data = params.data;
    const { json } = await httpClient(`${API_URL}/${resource}/${params.id}`, {
      method: "PUT",
      body: JSON.stringify(data),
    });
    return { data: json };
  },
  patch: async (resource, params) => {
    await api.recordAsImage(resource, params.data);
    const data = params.data;
    const json = await httpClient(`${API_URL}/${resource}/${params.id}`, {
      method: "PATCH",
      body: JSON.stringify(data),
    });
    return { data: json };
  },

  updateMany: async (resource, { ids, data }) => {
    console.log("DATA", data);
    await api.recordAsImage(resource, data);
    let url = `${API_URL}/${resource}`;
    url = `${url}?ids=${ids.join(",")}`;
    const json = await httpClient(url, {
      method: "PATCH",
      body: JSON.stringify(data),
    });
    return { data: json };
  },

  delete: (resource, params) =>
    httpClient(`${API_URL}/${resource}/${params.id}`, {
      method: "DELETE",
    }).then(({ json }) => ({ data: json })),
};

export default api;

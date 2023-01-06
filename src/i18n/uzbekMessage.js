export const uzbekMessage = {
  resources: {
    users: {
      name: "Foydalanuvchilar",
      list: "Foydalanuvchilar ro'yxati",
      create: "Foydalanuvchi yaratish",
      show: "Foydalanuvchi ma'lumotlari",
      edit: "Foydalanuvchilarni tahrirlash",
      fields: {
        name: "Ism Familiya",
        username: "Fodalanuvchi nomi",
        phoneConfirmed: "Telefon tasdiqlandi",
        phone: "Telefon",
        password: "Parol",
        roles: "Rollar",
      },
    },
  },
  static: {
    hello_world: "Salom, xush kelibsiz",
    install_HBO: "HBO o'rnatish",
    marks: "Belgilar",
    tex_service: "Texnik xizmat ko'rsatish",
    acts_processed: "Qayta ishlangan aktlar",
    service_indicators: "Xizmat ko'rsatkichlari",
    service_indicator_percent: "Oldingi oyga nisbatan +43%",
    indicators_by_region: "Mintaqalar bo'yicha ko'rsatkichlar",
    service_maintenance: "Xizmatlar",
    app_title: "Dashboard | XKS Boshqaruv Panel",
    size: "O'lchamlar",
    length: "Uzunlik",
    length_error: "Uzunlikdagi xatolik",
    operating_pressure: "Ishchi bosimi",
    value: "Qiymat",
    temperature: "Harorat",
    operating_temperature: "Ishchi harorat",
    material: "Material",
    weight: "Og'irligi",
    hydroCheck_pressure: "Suv bosimi",
    certificate_number: "Sertifikat raqami",
    dashboard: "Boshqaruv paneli",
    info: "Ma'lumotlar",
    account: {
      displayName: "Ivanjon Ivan o'g'li",
      email: "admin@admin.uz",
      photoURL: "/static/mock-images/avatars/avatar_default.jpg",
    },
  },
  ra: {
    action: {
      add_filter: "Filtr qo'shish",
      add: "Qo'shish",
      back: "Orqaga",
      bulk_actions:
        "1ta tanlandi |||| %{smart_count} tanlandi |||| %{smart_count} tanlandi",
      cancel: "Bekor qilmoq",
      clear_input_value: "Tozalamoq",
      clone: "Ko'chirmoq",
      confirm: "Tasdiqlamoq",
      create: "Yaratmoq",
      delete: "O'chirish",
      edit: "Tahrirlamoq",
      export: "Yuklab olmoq",
      list: "Ro'yxat",
      refresh: "Yangilamoq",
      remove_filter: "Filtrni olib tashlash",
      remove: "O'chirish",
      save: "Saqlamoq",
      search: "Qidiruv",
      show: "Ko'rish",
      sort: "Tartiblash",
      undo: "Bekor qilish",
      unselect: "Tanlanmadi",
      expand: "Ochish uchun",
      close: "Yopish",
      open_menu: "Menuni Ochish",
      close_menu: "Menuni Yopish",
    },
    boolean: {
      true: "Ha",
      false: "Yo'q",
      null: "",
    },
    page: {
      create: "%{name} Yaratish",
      dashboard: "Dashboard",
      users: "Userlar",
      edit: "%{name} #%{id}",
      error: "Uzr xatolik, qaytadan urinib ko'ring",
      list: "%{name}",
      loading: "Yuklanmoqda...",
      not_found: "Hech narsa topilmadi",
      show: "%{name} #%{id}",
      empty: "Bo'sh %{name}.",
      invite: "Yana qo'shishni xohlaysizmi?",
    },
    input: {
      file: {
        upload_several:
          "Fayllarni shu yerga olib keling yoki tanlash uchun bosing.",
        upload_single:
          "Fayllarni shu yerga olib keling yoki tanlash uchun bosing.",
      },
      image: {
        upload_several:
          "Rasmlarni shu yerga olib keling yoki tanlash uchun bosing.",
        upload_single:
          "Rasmlarni shu yerga olib keling yoki tanlash uchun bosing.",
      },
      references: {
        all_missing: "Tegishli ma'lumotlar topilmadi",
        many_missing: "Ba'zi tegishli ma'lumotlar mavjud emas",
        single_missing: "Tegishli ma'lumot mavjud emas",
      },
      password: {
        toggle_visible: "Parolni yashirish",
        toggle_hidden: "Parolni ko'rsatish",
      },
    },
    message: {
      about: "Malumot",
      are_you_sure: "Ishonchingiz komilmi?",
      bulk_delete_content:
        "Haqiqatan ham %{name}ni o'chirib tashlamoqchimisiz ? |||| Haqiqatan ham  %{smart_count}ta malumotni o'chirmoqchimisiz? ||||  Haqiqatan ham  %{smart_count}ta malumotni o'chirmoqchimisiz?",
      bulk_delete_title:
        "%{name} o'chirish ||||  %{smart_count} ta %{name}ni o'chirish |||| %{smart_count} ta %{name}ni o'chirish",
      delete_content: "Haqiqatan ham bu elementni o'chirib tashlamoqchimisiz?",
      delete_title: "%{name} #%{id} o'chirish",
      details: "Tafsilotlar",
      error: "So‘rov vaqtida xatolik yuz berdi va uni yakunlab bo‘lmaydi",
      invalid_form: "Forma noto'g'ri to'ldirilgan, xatolarni tekshiring",
      loading: "Yuklanmoqda, kuting...",
      no: "Yo'q",
      not_found: "URL xatosi yoki siz noto'g'ri havolaga o'tyapsiz",
      yes: "Ha",
      unsaved_changes:
        "Baʼzi oʻzgarishlaringiz saqlanmadi. Haqiqatan ham ularni e'tiborsiz qoldirmoqchimisiz?",
    },
    navigation: {
      no_results: "Hech qanday natija topilmadi",
      no_more_results: "%{page}-sahifa soni yo‘q, oldingisini sinab ko‘ring",
      page_out_of_boundaries: "%{page}-sahifa chegaradan tashqarida",
      page_out_from_end: "Oxirgi sahifadan o‘tib bo‘lmaydi",
      page_out_from_begin: "Sahifa raqami 1 dan kam boʻlmasligi kerak",
      page_range_info: "%{offsetBegin}-%{offsetEnd} dan %{total}",
      page_rows_per_page: "Har bir sahifadagi qatorlar:",
      next: "Keyingisi",
      prev: "Oldingi",
      skip_nav: "Tarkibga o‘tish",
    },
    sort: {
      sort_by: "%{field} %{order} kabi saralash",
      ASC: "tepaga",
      DESC: "pastga",
    },
    auth: {
      auth_check_error: "Ishni davom ettirish uchun tizimga kiring.",
      user_menu: "Profil",
      username: "Foydalanuvchi nomi",
      password: "Parol",
      sign_in: "Kirish",
      sign_in_error: "Autentifikatsiya amalga oshmadi, qayta urinib ko‘ring",
      logout: "Chiqish",
    },
    notification: {
      updated:
        "Element yangilandi |||| %{smart_count} yangilandi |||| %{smart_count} yangilandi",
      created: "Element yaratildi",
      deleted:
        "Element o'chirildi |||| %{smart_count} o'chirildi |||| %{smart_count} o'chirildi",
      bad_item: "Element yaroqsiz",
      item_doesnt_exist: "Element mavjud emas",
      http_error: "server xatosi",
      data_provider_error: "dataProvider xatosi, konsolni tekshiring",
      i18n_error: "Belgilangan til uchun tarjimani yuklab bo‘lmadi",
      canceled: "Operatsiya bekor qilindi",
      logged_out:
        "Seansingiz tugadi, qayta ulanishga/kirishga qaytadan urinib koʻring",
    },
    validation: {
      required: "Formani to'ldirish shart",
      minLength: "Belgilarning minimal soni %{min}",
      maxLength: "Belgilarning maksimal soni %{max}",
      minValue: "Minimal qiymat %{min}",
      maxValue: "Qiymat %{max} yoki undan kam boʻlishi mumkin",
      number: "Raqam bo'lishi kerak",
      email: "Noto'g'ri elektron pochta",
      oneOf: "Quyidagilardan biri boʻlishi kerak: %{options}",
      regex: "Quyidagi formatda bo'lishi kerak (regexp): %{pattern}",
    },
  },
};

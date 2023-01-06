import React from 'react';
import { TextField, AutocompleteInput } from 'react-admin';

const TitleField = ({ source, record = {}}) => {
    const title = getTitle(record, source);
    return (
        <TextField record={{title}} source="title" />
    );
};


const TitleNameField = ({ source, record = {}}) => {
    const title = getTitle(record, source);
    return (
        <div>
            <TextField record={{title}} source="title" /> <br />
            <small><TextField record={record} source={source} /></small>
        </div>
    );
};

export default TitleField;

export const getTitle = (record, source) => {
    if (!record) {
        return '---';
    }
    if (record.name) {
        return record.name;
    }
    const locale = record.localizations.find(l => l.localizationKey === 'ru');
    const title = locale && locale.title ? locale.title : record[source];
    return title;
}

export const getTitleName = (record, source) => {
    if (!record) {
        return '---';
    }
    if (!record.locales) {
        if (record.name)
            return record.name;
        else
            return record;
    }
    const locale = record.locales.find(l => l.localeKey === 'ru');
    const title = locale && locale.value ? locale.value : record[source];
    return title + (record.name ? ' ( ' + record.name + ' )' : '');
}

export const matchSuggestionTitleOrName = (filter, choice) => {
    const lowerFilter = filter.toLowerCase();
    const title = getTitle(choice);
    if (title && title.toLowerCase().indexOf(lowerFilter) > -1) {
        return true;
    }
    if (choice.name && choice.name.toLowerCase().indexOf(lowerFilter) > -1) {
        return true;
    }
    return false;
}

// function inputText(choice) {
//     console.log('inputText', arguments);
//     return getTitle(choice);
// }

export const AutocompleteByTitle = (props) => {
    return <AutocompleteInput 
        optionText={getTitleName} 
        matchSuggestion={matchSuggestionTitleOrName}
        {...props} />
}

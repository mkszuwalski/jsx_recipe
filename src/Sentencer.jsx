import React from 'react';

const Sentencer = (str) => {
    const replaceRegEx = /\. /gi;
    const replaceWith = ".<br />";
    if (str === null) {
        return "";
    } else {
        return str.replace(replaceRegEx, replaceWith);
    }
}
export default Sentencer;
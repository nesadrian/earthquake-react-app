const dateToISO = date => date.toISOString().split('T', 1)[0];

export { dateToISO };
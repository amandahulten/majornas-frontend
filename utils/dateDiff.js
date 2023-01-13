export const dateDiff = (date) => {
    const daysUntilEnds = Math.round((Date.parse(date) - Date.now()) / 86400000);
    return new Intl.RelativeTimeFormat("sv-SE", {numeric:'auto'}).format(daysUntilEnds, "days");
}
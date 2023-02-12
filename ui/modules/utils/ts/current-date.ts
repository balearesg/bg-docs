export /*bundle*/
 const getCurrentDate: () => string = (): string =>
    new Date().toLocaleDateString("en-CA", {
        month: "2-digit",
        day: "2-digit",
        year: "numeric",
    }).split("/").reverse().join("-");
module.exports = {
    css: {
        loaderOptions: {
            sass: {
                prependData: `@import "@/styles/_globalStyles.scss";`
            }
        }
    }
};
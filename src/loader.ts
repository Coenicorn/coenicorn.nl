export type IimageContainer = IobjectContainer<HTMLImageElement>;

async function importImage(source: string): Promise<HTMLImageElement> {
    return new Promise<HTMLImageElement>((resolve, reject) => {
        console.log(`[Assets] Started loading image ${source}`);

        const img = new Image();
        img.src = source;
        img.onload = function () { resolve(img); console.log(`[Assets] Loaded image ${source}`) };
        img.onerror = function (e) { reject(e) };
    });
}

// function to get all assets inside the asset directory
export async function loadAssets(fileNames: string[], directory: string): Promise<IimageContainer> {
    return new Promise(async (resolve, reject) => {
        // get file names from the asset directory
        const out: IimageContainer = {};

        for (let fileName of fileNames) {
            const image = await importImage(`${directory}/${fileName}.png`);

            // check for any errors
            if (!image) throw new Error(`Image '${fileName}' wasn't found in the asset directory`);

            out[fileName] = image;
        }

        resolve(out);
    });
}
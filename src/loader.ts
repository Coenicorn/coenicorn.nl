export type IimageContainer = IobjectContainer<HTMLImageElement>;

export async function importImage(source: string): Promise<HTMLImageElement> {
    return new Promise<HTMLImageElement>((resolve, reject) => {
        const img = new Image();
        img.src = source;
        img.onload = function () { resolve(img) };
        img.onerror = function (e) { throw e };
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

var fs = require('fs');
const util = require('util');
const writeFileContent = util.promisify(fs.writeFile);
const mkDir = util.promisify(fs.mkdir);

//!NEEDS ENDING SLASH
var readFilePath = `css/`;

fs.readdir(`${readFilePath}`, (err, files) => {
  //   console.log(files);
  files.map((file, i) => {
    // console.log(file);

    //? delete folders
    // if (file.indexOf(`toolkit`) !== -1) {
    //   // console.log(file);
    //   try {
    //     fs.rmSync(readFilePath + file, { recursive: true })
    //     console.log(`${file} has been deleted and all its contents`);

    //   } catch (err) {
    //     console.log(`oops something went wrong`);
    //     console.error(err)
    //   }
    // }

    //? delete files
    if (file.indexOf(`.less`) !== -1) {
      console.log(file);
      try {
        fs.unlinkSync(readFilePath + file, { recursive: true, force: true })
        console.log(`${file} has been deleted`);

      } catch (err) {
        console.log(`oops something went wrong`);
        console.error(err)
      }
    }

    // fs.unlink()

    // fs.rename(readFilePath + file, readFilePath + newName, (err) => {
    //     if(err){
    //         console.log(`oops something went wrong`);
    //         console.log(err);
    //     } else {
    //         console.log(`${file} renamed to ${newName}`);
    //     }

    // });

  });

});



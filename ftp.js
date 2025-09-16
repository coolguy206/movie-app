var Client = require('ftp');
var fs = require('fs');
const util = require('util');
const writeFileContent = util.promisify(fs.writeFile);
const mkDir = util.promisify(fs.mkdir);
require('dotenv').config()

// console.log(process.env.FTP_PASSWORD);

//!NEEDS ENDING SLASH
var baseURL = `/public_html/`;
var category = `apps/movie-app`;

//!EXCEPT THIS ONE
var url = `${baseURL}${category}`

console.log(url);

//!NEEDS ENDING SLASH
// var readFilePath = `Site/${num}/Site/hp/`;
// var readFilePath = `Site/${num}/Site/mega/`;
// var readFilePath = `Site/${num}/02 Handoff/hp/`;
// var readFilePath = `handoff/landing-pages/dresses/${num}/handoff/`;

// var writeFilePath = `promos/bubble/dev/images/`;
// var writeFilePath = `promos/default/dev/images/homepage/${num}/`;
// var writeFilePath = `promos/default/dev/images/mega-menu/${num}/`;
// var writeFilePath = `promos/headers/dev/images/new-arrivals/`;
// var writeFilePath = `landing-page/school-days/sign-up/dev/images/${num}/`;
// var writeFilePath = `homepage/default/dev/images/${num}/`;
// var writeFilePath = `mega-menu/dev/images/`;
var fileName = `c2b-m`;
var ext = `.jpg`;

// fs.readdir(`${readFilePath}`, (err, files) => {
//   console.log(files);
//   files.map((file, i) => {
//     console.log(file);
//     fs.readFile(`${readFilePath}/${file}`, function (err, data) {
//       console.log(data);
//     });
//   });

// });


// console.log(url)
// console.log(process.env.FTP_HOST, process.env.FTP_USER, process.env.FTP_PASSWORD);

var c = new Client();
c.on('ready', function () {

  //?UPLOAD SINGLE FILE TO DIRECTORY
  /*
  c.put(`${readFilePath}${fileName}${ext}`, `${url}${fileName}${ext}`, (err) => {
    if (err) throw err;
    console.log(`successfully uploaded file: ${fileName}${ext}`);

    var name = fileName.split('.')[0];
    var html = ``;
    if (name.indexOf(`-`) !== -1) {
      // console.log(name);
      if (name.indexOf(`-d`) !== -1) {
        html = `<img class="desktop" data-set="/mas_assets${url}${fileName}${ext}">`;
      } else if (name.indexOf(`-m`) !== -1) {
        html = `<img class="mobile" data-set="/mas_assets${url}${fileName}${ext}">`;
      } else {
        html = `<img data-set="/mas_assets${url}${fileName}${ext}">`;
      }
    } else {
      html = `<img data-set="/mas_assets${url}${fileName}${ext}">`;
    }

    //*make the html file
    fs.writeFile(`${writeFilePath}${fileName}.html`, html, (err) => {
      if (err) throw err;
      console.log(`File written successfully. ${fileName}.html`);
    });
    c.end();
  });
  */

  //?UPLOAD FILES TO DIRECTORY
  /*
    fs.readdir(`${readFilePath}`, (err, files) => {
      if (err) throw err;
      // console.log("\nCurrent directory filenames:");
      files.forEach(file => {
        // console.log(`${readFilePath}${file}`);
        // console.log(`${url}${file}`)

        //*upload the file
        c.put(`${readFilePath}${file}`, `${url}${file}`, (err) => {
          if (err) throw err;
          console.log(`successfully uploaded file: ${file}`);

          var name = file.split('.')[0];
          var html = ``;
          if (name.indexOf(`-`) !== -1) {
            // console.log(name);
            if (name.indexOf(`-d`) !== -1) {
              html = `<img class="desktop" data-set="/mas_assets${url}${file}">`;
            } else if (name.indexOf(`-m`) !== -1) {
              html = `<img class="mobile" data-set="/mas_assets${url}${file}">`;
            } else {
              html = `<img data-set="/mas_assets${url}${file}">`;
            }
          } else {
            html = `<img data-set="/mas_assets${url}${file}">`;
          }

          //*make the html file
          fs.writeFile(`${writeFilePath}${name}.html`, html, (err) => {
            if (err) throw err;
            console.log(`File written successfully. ${name}.html`);
          });
          c.end();
        });

      });
    })
  */

  //?MAKE DIRECTORY THEN UPLOAD FILES AND MAKE HTML FILES
  /*
    c.mkdir(url, true, (err) => {
      if (err) throw err;
      console.log(`successfully made dir: ${url}`);
  
      //*read the files on local machine
      fs.readdir(`${readFilePath}`, (err, files) => {
        if (err) throw err;
        // console.log("\nCurrent directory filenames:");
        // console.log(files);
        files.map((file, i) => {
          // console.log(`${readFilePath}${file}`);
          // console.log(`${url}${file}`)
          // console.log(file);
  
          //*upload the file
          c.put(`${readFilePath}${file}`, `${url}${file}`, (err) => {
            if (err) throw err;
            console.log(`successfully uploaded file: ${file}`);
  
            var html = ``;
            var name = file.split('.')[0];
            var ext = file.split('.')[1];
            var fileName = name.toLowerCase();
            // console.log(ext);
  
            if (ext == 'pdf') {
              // console.log(`it is a pdf`);
              var html = `<a class="the-official-rules" href="/mas_assets${url}${file}" target="_blank">official rules</a>`;
            } else if (ext == 'mp4') {
              console.log(`it is a mp4`);
              if (name.indexOf(`-d`) !== -1) {
              var html = `
                <video poster="" class="desktop" muted autoplay loop>
                  <source src="/mas_assets${url}${file}" type="video/mp4">
                  Your browser does not support the video tag.
                </video>
                `;
              } else if (name.indexOf(`-m`) !== -1) {
                var html = `
                <video poster="" class="mobile" muted autoplay loop playsinline> 
                  <source src="/mas_assets${url}${file}" type="video/mp4">
                  Your browser does not support the video tag.
                </video>
                `;
              } else {
                var html = `
                <video poster="" muted autoplay loop>
                  <source src="/mas_assets${url}${file}" type="video/mp4">
                  Your browser does not support the video tag.
                </video>
                `;
              }
              // console.log(`${url} ${file}`);
            } else {
              // console.log(`it is not a pdf`);
              var alt = ``;
              if (name.indexOf(`-`) !== -1) {
                // console.log(name);
                alt = name.split(`-`)[0];
                alt = alt.replace(/_/g, ' ');
                // console.log(alt);
                if (name.indexOf(`-d`) !== -1) {
                  html = `<img class="desktop" data-set="/mas_assets${url}${file}" alt="${alt}">`;
                } else if (name.indexOf(`-m`) !== -1) {
                  html = `<img class="mobile" data-set="/mas_assets${url}${file}" alt="${alt}">`;
                } else {
                  html = `<img data-set="/mas_assets${url}${file}">`;
                }
              } else {
                alt = name.replace(/_/g, ' ');
                // console.log(alt);
                html = `<img data-set="/mas_assets${url}${file}" alt="${alt}">`;
              }
  
            }
  
            // console.log(`the html`);
            // console.log(html);
            // console.log(`${writeFilePath}${fileName}.html`);
  
            //*make the html file
            writeFileContent(`${writeFilePath}${fileName}.html`, html).then((data) => {
              console.log(`File written successfully. ${fileName}.html`);
            }).catch((err) => {
              console.log(err);
              if (err.code == `ENOENT`) {
                console.log(`let's mkdir`);
                mkDir(writeFilePath, true).then((data) => {
                  console.log('Directory created successfully!');
                  console.log(writeFilePath);
  
                  writeFileContent(`${writeFilePath}${fileName}.html`, html).then((data) => {
                    console.log(`File written successfully. ${fileName}.html`);
                  }).catch((err) => {
                    console.log(err);
                  })
                })
                  .catch((err) => {
                    console.log(err);
                  })
              }
            });
            c.end();
          });
  
        });
      })
      // c.end();
    });
  
  */

  //?GET LIST OF FILES THEN COMPILE HTML FILES
  /*
    c.list(url, function(err, list) {
      if (err) throw err;
      list.map((val, i) => {

        console.log(val);
        var name = val.name.split('.')[0];
        var html = ``;
        if (name.indexOf(`-`) !== -1) {
          // console.log(name);
          if (name.indexOf(`-d`) !== -1) {
            html = `<img class="desktop" data-set="/mas_assets${url}${val.name}">`;
          } else if (name.indexOf(`-m`) !== -1) {
            html = `<img class="mobile" data-set="/mas_assets${url}${val.name}">`;
          } else {
            html = `<img data-set="/mas_assets${url}${val.name}">`;
          }
        } else {
          html = `<img data-set="/mas_assets${url}${val.name}">`;
        }

        //*make the html file
        writeFileContent(`${writeFilePath}${name}.html`, html).then((data) => {
          console.log(`File written successfully. ${name}.html`);
        }).catch((err) => {
          console.log(err);
        });

      })

      c.end();
    });
  */

  //?GET LIST OF FILES THEN DELETE FILES IN DIRECTORY
  /*
  c.list(url, function(err, list) {
    if (err) throw err;
    list.map((val, i) => {
      if (val.type == '-') {
        // console.log(val);

        //*DELETE FILES
        c.delete(`${url}${val.name}`, function(err) {
          if (err) throw err;
          console.log(`successfully deleted file: ${url}${val.name}`);
          c.end();
        });
      }
    })
    // console.dir(list);
    // c.end();
  });
  */

  //?LIST DIRECTORIES

  c.list(url, function (err, list) {
    if (err) throw err;
    list.map((val, i) => {
      // if (val.type == 'd') {
      console.log(val);
      // }
    })
    // console.dir(list);
    c.end();
  });

});

//?CONNECT FTP

c.connect({
  host: process.env.FTP_HOST,
  user: process.env.FTP_USER,
  password: process.env.FTP_PASSWORD
});
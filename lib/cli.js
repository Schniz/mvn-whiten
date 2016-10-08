#!/usr/bin/env node

import whiten from './index';
import fs from 'fs';


function showUsage() {
  console.log([
    'Maven Whiten',
    '------------',
    '',
    'mvn-whiten <groupId>:<artifactId>:<version>',
    'Options are:',
    '-d,--dependency-dir <Directory>    download dependencies to this folder',
                                       '(default:local-repo)',
    '-f,--dependency-file <JSON-File>   use this JSON dependency file',
                                       '(default:dependencies.json)',
    '-h,--help                          print this usage and exit',
    '-j,--with-javadoc                  download javadoc attachment of',
                                       'artifact',
    '-p,--without-provided              don\'t download provided dependencies',
                                       'of artifact',
    '-s,--with-sources                  download source attachment of artifact',
    '-t,--without-tests                 don\'t download test dependencies of',
                                       'artifact',
   'Additonal repositories to be searched for dependencies can be added in',
   'file \'extra-repos.json\''

  ].join('\n'));
}

let packages = process.argv.slice(2);
if (packages.length === 0 || packages.indexOf('--help') !== -1 || packages.indexOf('-h') !== -1) {
  showUsage();
  process.exit(1);
}

whiten( packages, ( err, { tar, cb }  ) => {
  let filePath = packages.join('-').replace(/:/g, '_') + '.tar';
  tar.pipe(fs.createWriteStream(filePath)).on('end', () => {
      cb();
  });

} );

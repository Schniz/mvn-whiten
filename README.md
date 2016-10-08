# mvn-whiten

> download maven jars to your internal artifactory server
> using a forked and precompiled [mvn-dd](https://github.com/AlexK-IL/mvn-dd)

Creates a `tar` archive for maven dependencies. yay.

## Installation
First make sure you have java installed or the program won't work.
Install `mvn-whiten` with the command:

```bash
npm install -g mvn-whiten
```
Might need sudo permissions on linux.

## Usage

```bash
mvn-whiten <groupId>:<artifactId>:<version> [<groupId>:<artifactId>:<version> ...]
```

and there will be a new `tar` file.

For more options:

```
 -d,--dependency-dir <Directory>    download dependencies to this folder
                                    (default:local-repo)
 -f,--dependency-file <JSON-File>   use this JSON dependency file
                                    (default:dependencies.json)
 -h,--help                          print this usage and exit
 -j,--with-javadoc                  download javadoc attachment of
                                    artifact
 -p,--without-provided              don't download provided dependencies
                                    of artifact
 -s,--with-sources                  download source attachment of artifact
 -t,--without-tests                 don't download test dependencies of
                                    artifact
```

that's it.

**If an exception is thrown complaining about missing dependencies, you might need to add extra repositores to your directory, see `extra-repos.json` for example.**

*Tip: Copy the gradle profile from http://mvnrepository.com/ artifact as the parameter.*

<div align="middle">
    <img src="https://github.com/suitelab/simple-resume/raw/master/public/static/resume.png" height="500px">
</div>

<h1 align="center">🐤️ Simple-resume</h1>

<p align="center">
  	<a href="https://github.com/suitelab/simple-resume/LICENSE">
    	<img src="https://img.shields.io/badge/license-MIT-blue.svg" alt="Simple-resume is released under the MIT license." />
  	</a>
	<a href="https://github.com/suitelab/simple-resume"> <img src="https://badges.frapsoft.com/os/v1/open-source.svg?v=102"></a>
	<a href="https://github.com/suitelab/simple-resume"><img src="https://img.shields.io/badge/PRs-welcome-brightgreen.svg"></a>
	<a href="https://github.com/suitelab/simple-resume"><img src="https://img.shields.io/badge/release-v0.0.1-brightgreen.svg"></a>
</p>

## Overview
Simple-resume은 node.js와 yaml을 통해 편리하고 빠르게 이력서를 작성 할 수 있습니다.
<div align="middle">
    <img src="https://github.com/suitelab/simple-resume/raw/master/public/static/profile-yaml.png">
</div>

## Installation

```shell
$ git clone https://github.com/suitelab/simple-resume.git
$ cd simple-resume
$ npm i
```

1. 프로젝트를 clone합니다. 
```shell
$ git clone https://github.com/suitelab/simple-resume.git
```
2. simple-resume 폴더로 이동합니다. `cd simple-resume`
3. npm을 통해 package를 설치합니다. `npm i`

## How to use
```shell
$ npm start profile
> your resume [profile] in http://localhost:3000 !
$ npm run pdf
```
- run your program, go to http://localhost:PortNumber
- if you want export to pdf, after server on

1. profile-example.yml 파일을 복사하여 새로운 profile.yml을 생성합니다.
2. 파일 내의 설명을 따라서 profile.yml을 작성합니다.
3. shell에서 `npm start {yml/경로/파일명}`을 입력하여 서버를 실행 합니다.
4. http://localhost:3000 에서 이력서를 확인할 수 있습니다.
5. (Beta)pdf 출력은 서버가 실행중일 때 `npm run pdf {출력할/경로/파일명}`로 할 수 있습니다.

## Demo
* simple-resume
<http://resume.suitee.me>


## Contributing

This is an open source product, please feel free to fork and make pull requests!

Any suggestions are welcomed!

## Authors

[yoon.homme](https://github.com/suitelab)

## License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details
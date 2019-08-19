<div align="middle">
    <img src="https://github.com/suites/simple-resume/blob/master/static/simple-resume.png" height="500px">
</div>

<h1 align="center">🐤️ Simple-resume</h1>
<p align="center">
  	<a href="https://github.com/suites/simple-resume/LICENSE">
    	<img src="https://img.shields.io/badge/license-MIT-blue.svg" alt="Simple-resume is released under the MIT license." />
  	</a>
	<a href="https://github.com/suites/simple-resume"> <img src="https://badges.frapsoft.com/os/v1/open-source.svg?v=102"></a>
	<a href="https://github.com/suites/simple-resume"><img src="https://img.shields.io/badge/PRs-welcome-brightgreen.svg"></a>
	<a href="https://github.com/suites/simple-resume"><img src="https://img.shields.io/badge/release-v2.0.0-brightgreen.svg"></a>
  <a href="https://api.netlify.com/api/v1/badges/0acd847f-0109-44a3-90c1-f71779d56e28/deploy-status"><img src="https://app.netlify.com/sites/simple-resume-john-doe/deploys"></a>
</p>

## Overview
Simple-resume은 React+Gatsby와 yaml을 통해 편리하고 빠르게 이력서를 작성 할 수 있습니다.
<div align="middle">
    <img src="https://github.com/suites/simple-resume/blob/master/static/profile-yaml.png">
</div>

## Installation

```shell
$ git clone https://github.com/suites/simple-resume.git
$ cd simple-resume
$ yarn install
```

1. 프로젝트를 clone합니다. 
```shell
$ git clone https://github.com/suites/simple-resume.git
```
2. simple-resume 폴더로 이동합니다. `cd simple-resume`
3. yarn을 통해 package를 설치합니다. `yarn install`

## How to use
```shell
$ npm run start
```
- run your program, go to http://localhost:8000

1. static/resumes/john-doe.yaml 파일을 복사하여 새로운 profile.yaml을 작성합니다.

2. gatsby-config.js 에서 해당 코드의 path부분을 본인의 yaml 파일로 지정합니다.

3. ```json
       `gatsby-transformer-yaml`,
       {
         resolve: `gatsby-source-filesystem`,
         options: {
           path: `./static/resumes/resume.yaml`,
         },
       },
   ```

3. http://localhost:8000 에서 이력서를 확인할 수 있습니다.

## Demo
* simple-resume
<https://simple-resume-john-doe.netlify.com/>


## Contributing

This is an open source product, please feel free to fork and make pull requests!

Any suggestions are welcomed!

## Authors

[yoon.homme](https://github.com/suites)

## License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details 
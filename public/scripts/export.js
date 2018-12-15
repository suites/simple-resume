const puppeteer = require('puppeteer');
const path = require('path');
const http = require('http');
const appRoot = require('app-root-path');
const mkdirp = require('mkdirp');

const {
    interval
} = require('rxjs');
const {
    filter,
    first,
    mergeMap
} = require('rxjs/operators');

const fetchResponse = () => {
    return new Promise((res, rej) => {
        try {
            const req = http.request(`http://localhost:3000/`, response => res(response.statusCode));
            req.on('error', (err) => rej(err));
            req.end();
        } catch (err) {
            rej(err);
        }
    });
};

const waitForServerReachable = () => {
    return interval(1000).pipe(
        mergeMap(async () => {
            try {
                const statusCode = await fetchResponse();
                if (statusCode === 200) return true;
            } catch (err) { }
            return false;
        }),
        filter(ok => !!ok)
    );
};

const convert = async () => {
    await waitForServerReachable().pipe(
        first()
    ).toPromise();

    console.log('Connected to server ...');
    console.log('Exporting ...');


    try {
        const browser = await puppeteer.launch({
            args: ['--no-sandbox']
        });
        const page = await browser.newPage();
        await page.goto(`http://localhost:3000/`, {
            waitUntil: 'networkidle2'
        });

        const dirPath = appRoot.path + '/pdf/'

        const mkdirSync = (dirPath) => {
            try {
                fs.mkdirSync(dirPath);
            } catch (err) {
                if (err.code !== 'EEXIST') throw err
            }
        }

        await page.pdf({
            path: path.join(dirPath, 'resume' + '.pdf'),
            format: 'A4',
            scale: 0.7
        });

        await browser.close();
    } catch (err) {
        throw new Error(err);
    }
    console.log('Finished exports.');
};

convert();
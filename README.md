# Repro

1. `npm start`
2. Navigate to `http://localhost:3000/api/hello`. `LOCAL_VALUE` is shown as expected.
3. But, when the app is deployed to production using `now --target production`, navigating to `https://now-environment-variables.moroshko.now.sh/api/hello` still shows `LOCAL_VALUE`. I expect to see `PRODUCTION_VALUE`.

How could I differentiate between `localhost` and production environments?

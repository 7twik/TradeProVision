need venv in /v1front/api  and /prediction by command:  python -m venv venv

IN /prediction
.venv/scripts/activate
pip install streamlit plotly prophet yfinance
streamlit run

in /v1front/api 
pip install flask flask-cors yfinance python-dotenv scikit-learn

in /v1front
npm i
npm run dev

in /v1back
npm i
npm i nodemon --g
nodemon index.js


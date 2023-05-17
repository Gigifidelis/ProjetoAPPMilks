import requests
from requests import Response
from selenium import webdriver
from selenium.webdriver.common.keys import Keys
from bs4 import BeautifulSoup
import time
import json
import pandas as pd
from selenium.webdriver.chrome.options import Options

def getStatiumData(driver,statiumList):
    failures = []
    for statium in statiumList:
        try:
            url = f'https://tempo.inmet.gov.br/TabelaEstacoes/{statium["CD_ESTACAO"]}'
            driver.get(url)
            time.sleep(1)        
            html = driver.page_source
            soup = BeautifulSoup(html, "html.parser")
            table = soup.find('table')
            data = mapData(table)
            print({statium['DC_NOME']: 'ok'})
        except Exception as e:
            print({statium['DC_NOME']: 'fail'})
            failures.append(statium)
    if len(failures) > 0:
        getStatiumData(driver, failures)
    return 'finish'
 
def mapData(table):
    df = pd.read_html(str(table))[0]
    df.columns = df.columns.map('|'.join).str.strip('|')
    df = df.drop(columns=['Data|Unnamed: 0_level_1'])
    df['Hora|UTC'] = df['Hora|UTC'].apply(lambda x : x/100)
    return  df.to_json(orient="records")    

def getStatiumList():
    response = requests.get('https://apitempo.inmet.gov.br/estacoes/T')
    body = response.content.decode("utf-8")
    return json.loads(body)

if __name__ == "__main__":
    driver = webdriver.Chrome('./chromedriver')
    statiumList = getStatiumList()
    getStatiumData(driver, statiumList)
#!/usr/bin/env python
# coding: utf-8

# In[1]:


import pandas as pd
import numpy as np
import os
import time
import datetime as datetime
from datetime import datetime, timedelta
import shutil, sys, string


# In[2]:


#01. Inicia leitura :

print ("#01. Inicia leitura: ")

dados_chuva = r'C:\Users\brassam\Desktop\projeto\chuva_piracicaba.CSV'

df_chuva = pd.read_csv(dados_chuva, sep=';', encoding = 'latin1')

df_chuva = df_chuva.rename(columns={'Hora UTC': 'Hora','PRECIPITAÇÃO TOTAL, HORÁRIO (mm)':'precipatação total (mm)','TEMPERATURA MÁXIMA NA HORA ANT. (AUT) (°C)':'Temperatura Máxima (°C)','TEMPERATURA MÍNIMA NA HORA ANT. (AUT) (°C)': 'Temperatura Mínima (°C)','UMIDADE REL. MAX. NA HORA ANT. (AUT) (%)':'Umidade Relativa Ar Max. (%)','UMIDADE REL. MIN. NA HORA ANT. (AUT) (%)':'Unidade Relativa Ar Min. (%)'})

df_chuva = df_chuva.drop(columns = ['TEMPERATURA ORVALHO MIN. NA HORA ANT. (AUT) (°C)','UMIDADE RELATIVA DO AR, HORARIA (%)'])

print('#Leitura Concluída')


# In[3]:


#02. Formatação da e hora :

print ("#02. Inicia formatação da data e hora: ")


# Cria um DataFrame de exemplo
df_hora = pd.DataFrame({'hora': ['0000 UTC','0100 UTC','0200 UTC','0300 UTC','0400 UTC','0500 UTC','0600 UTC','0700 UTC','0800 UTC','0900 UTC','1000 UTC','1100 UTC','1200 UTC','1300 UTC','1400 UTC','1500 UTC','1600 UTC','1700 UTC','1800 UTC','1900 UTC','2000 UTC','2100 UTC','2200 UTC','2300 UTC']})

# Aplica a função de conversão a todas as linhas da coluna
df_chuva['Hora_'] = df_hora['hora'].apply(lambda x: datetime.strptime(x, '%H%M %Z').strftime('%H:%M'))

df_chuva['Data'] = pd.to_datetime(df_chuva['Data'] , format="%d/%m/%Y")


print('#Formatação Concluída')


# In[5]:


# Cria uma lista com os nomes dos meses em ordem
meses = ['Janeiro', 'Fevereiro', 'Março', 'Abril', 'Maio', 'Junho',
         'Julho', 'Agosto', 'Setembro', 'Outubro', 'Novembro', 'Dezembro']

# Agrupa as linhas por mês e armazena cada grupo em um dataframe separado
dfs_meses = [group[1] for group in df_chuva.groupby(df_chuva['Data'].dt.month)]

# Adiciona o nome do mês em cada dataframe
for i, df in enumerate(dfs_meses):
    df['mes'] = meses[i]

# Armazena cada dataframe em uma variável separada
df_janeiro = dfs_meses[0]
df_fevereiro = dfs_meses[1]
df_marco = dfs_meses[2]


# In[10]:


t_janeiro = 'C:\\Server\\csv\\chuva_janeiro.csv'
df_janeiro.to_csv(t_janeiro, sep = ";", encoding='ANSI', header=True, index=False)

t_fevereiro = 'C:\\Server\\csv\\chuva_fevereiro.csv'
df_fevereiro.to_csv(t_fevereiro, sep = ";", encoding='ANSI', header=True, index=False)

t_marco = 'C:\\Server\\csv\\chuva_marco.csv'
df_marco.to_csv(t_marco, sep = ";", encoding='ANSI', header=True, index=False)


# In[ ]:





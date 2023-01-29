import pandas as pd

#------------------------#
# Getting vgsales(2).csv #
#------------------------#

# data = pd.read_csv('dataset/vgsales.csv', dtype=str)

# print(data)

# data = data.drop('NA_Sales', axis=1)
# data = data.drop('EU_Sales', axis=1)
# data = data.drop('JP_Sales', axis=1)
# data = data.drop('Other_Sales', axis=1)
# data = data.drop('Global_Sales', axis=1)

# def check_nan(input):
#    return pd.isna(input)


# for i in range(data['Name'].size):
#    if check_nan(data['Rank'][i]) or check_nan(data['Name'][i]) or check_nan(data['Platform'][i]) or check_nan(data['Year'][i]) or check_nan(data['Genre'][i]) or check_nan(data['Publisher'][i]):
#        data = data.drop(i)

# data.to_csv("dataset/vgsales(2).csv")

#------------------------#
# Getting vgsales(3).csv #
#------------------------#

# data = pd.read_csv('dataset/vgsales(2).csv', dtype=str)

# print(data)
# new_col = []

# for i in range(data['Name'].size):
#    print(i)
#    new_col.append(data['Name'] + " is a " + data['Year'][i] + " " + data['Genre'][i] +
#                   " game by " + data['Publisher'][i] + " rank " + data['Rank'][i])
# print(new_col)

# data['Overview'] = new_col
# data.to_csv("dataset/vgsales(3).csv")

#------------------------#
# Getting vgsales(4).csv #
#------------------------#

# data = pd.read_csv('dataset/vgsales(3).csv', dtype=str, index_col=0)
# print(data)

# data = data.drop('Platform', axis=1)
# data = data.drop('Year', axis=1)
# data = data.drop('Genre', axis=1)
# data = data.drop('Publisher', axis=1)

# data.to_csv('dataset/vgsales(4).csv')

#------------------------#
# Getting vgsales(5).csv #
#------------------------#

# data = pd.read_csv("dataset/vgsales(4).csv", dtype=str, index_col=0)
# data['Overview'] = data['Name'] + " " + data['Overview']

# data.to_csv('dataset/vgsales(5).csv')

#-------------------------#
# Adding unique id values #
#-------------------------#

data = pd.read_csv("dataset/vgsales(5).csv", dtype=str, index_col=0)

#data['game-id'] = data['Name'].str.replace(' ', "")
#data['game-id'] = data['game-id'].str.lower()
print(data['Name'].drop_duplicates(keep='first'))

data.to_csv('dataset/vgsales(5).csv')

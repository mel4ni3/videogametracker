import pandas as pd
import random
import numpy as np
import numbers
from joblib import load
import os.path

#----------------------------------#
# Code for getting recommendations #
#----------------------------------#
# helper function for finding recommendations


def get_recommendations(game_names_array):

    if game_names_array == []:
        return []

    game_recommendations = []

    data = pd.read_csv('dataset/vgsales(5).csv', dtype=str, index_col=0)
    indices = pd.Series(data.index, index=data['game-id'])
    cosine_sim = load('recommender_model.joblib')

    for i in range(len(game_names_array)):
        # preprocessing
        target_game = game_names_array[i]
        target_game_2 = game_names_array[i].split(':')[0]

        # check if the game is in the dataset, either verbatim or similar
        is_game_in_data = False
        for i in range(len(data['Name'])):
            if target_game_2 in data['game-id'][i]:
                target_game2 = data['game-id'][i]
                is_game2_in_data = True
            if target_game in data['game-id'][i]:
                target_game = data['game-id'][i]
                is_game_in_data = True
                break
        if is_game_in_data == False and is_game2_in_data == False:
            continue
        if is_game_in_data == False:
            target_game = target_game2

        # accounting for some flaws in the dataset
        for i in range(len(data['Name'])):
            if target_game in data['game-id'][i]:
                target_game = data['game-id'][i]

        if isinstance(indices[target_game], numbers.Integral):
            target_index = indices[target_game]
        else:
            target_index = indices[target_game][0]

        similarity_scores = pd.DataFrame(
            cosine_sim[target_index], columns=["Score"])
        # print(similarity_scores)

        # sort by score and take the first 11 rows
        similarity_scores = similarity_scores.sort_values(
            "Score", ascending=False)[1:11].index
        for i in range(10):
            if similarity_scores[i] not in game_recommendations:
                game_recommendations.append(similarity_scores[i])

    return data['Name'].iloc[game_recommendations].unique()

#----------------------------------#
# Code for finding recommendations #
#----------------------------------#
# JSON file has to be saved in user_data folder
# in a file named 'api-res.json'

# Called whenever user_data is updated (e.g. they get a new game)


def find_recommendations():
    user_data = pd.read_json('user_data/api-res.json')

    # preprocessing
    user_data['game-id'] = user_data['name'].str.replace(' ', "")
    user_data['game-id'] = user_data['game-id'].str.lower()

    user_games = []  # get games the user has as an array of strings

    for i in range(len(user_data)):
        user_games.append(user_data['game-id'][i])

    # run through the model
    recommendations = get_recommendations(user_games)

    recommendations = pd.DataFrame(recommendations, columns=['Name'])

    # check if file exists, else create new one
    # if os.path.isdir('./recommendations/user_recommendations.csv'):
    #    user_recommendations = pd.read_csv(
    #        'recommendations/user_recommendations.csv')
    #    new_recommendations = []
    #    for i in range(len(recommendations)):
    #        if recommendations['Name'][i] not in user_recommendations['Name']:
    #            new_recommendations.append(recommendations['Name'][i])
    #    new_recommendations.to_csv(
    #        'recommendations/user_recommendations.csv', mode='a', index=False, header=False)
    # else:
    #   recommendations.to_csv('recommendations/user_recommendations.csv')

    # create and re-write recommendations
    recommendations.to_csv('recommendations/user_recommendations.csv')

#-----------------------------------#
# Code for creating recommendations #
#-----------------------------------#
# creates a file containing an array of all recommendations, 'user_recommendations.csv'
# creates a file containing 10 random strings from all recommendations, 'rand10_user_recommendations.csv'


def return_recommendations():
    user_recommendations = pd.read_csv(
        'recommendations/user_recommendations.csv')
    recommendations_list = []

    # return 10 random recommendations, unless there are less than 10
    if len(user_recommendations) < 10:
        for i in range(len(user_recommendations)):
            recommendations_list.append(user_recommendations['Name'][i])
    else:
        for i in range(10):
            random_num = random.randint(0, len(user_recommendations)-1)
            if user_recommendations['Name'][random_num] in recommendations_list:
                i = -1
            else:
                recommendations_list.append(
                    user_recommendations['Name'][random_num])

    recommendations_list.to_json(
        'recommendations/rand10_user_recommendations.csv')

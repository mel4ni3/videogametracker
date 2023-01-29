import pandas as pd
import random
import numpy as np
from joblib import load

#----------------------------------#
# Code for getting recommendations #
#----------------------------------#


def get_recommendations(game_names_array):

    game_recommendations = []

    data = pd.read_csv('dataset/vgsales(5).csv', dtype=str, index_col=0)
    indices = pd.Series(data.index, index=data['game-id'])
    cosine_sim = load('recommender_model.joblib')

    for i in range(len(game_names_array)):
        # assuming the game names passed do not have spaces
        target_game = game_names_array[i].lower()

        # accounting for some game inputs having '/' for some reason
        for i in range(len(data['Name'])):
            if target_game in data['game-id'][i]:
                target_game = data['game-id'][i]

        target_index = indices[target_game]

        similarity_scores = pd.DataFrame(
            cosine_sim[target_index], columns=["Score"])
        # print(similarity_scores)

        # sort by score and take the first 11 rows
        similarity_scores = similarity_scores.sort_values(
            "Score", ascending=False)[1:11].index
        for i in range(10):
            if similarity_scores[i] not in game_recommendations:
                game_recommendations.append(similarity_scores[i])

    # for i in range(len(game_recommendations)):
    #    if data['Name'][i]
    return data['Name'].iloc[game_recommendations].unique()


if __name__ == '__main__':
    user_games = []  # get games the user has as an array of strings
    recommendations = get_recommendations(user_games)

    # print 10 random recommendations, will change to return string array of names
    for i in range(10):
        random_num = random.randint(0, len(recommendations)-1)
        print(recommendations[random_num])
        recommendations = np.delete(recommendations, random_num)

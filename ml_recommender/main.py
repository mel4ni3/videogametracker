import recommend
import model

if __name__ == '__main__':
    # create model
    model.create_model()

    # create new user_recommendations file
    # or update existing one with new data
    # must have JSON file named 'api-res.json' located in user_data folder
    recommend.find_recommendations()

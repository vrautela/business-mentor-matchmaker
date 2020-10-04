import numpy as np
import pandas as pd

# areas = ['Branding/Advertisement','Business Contracts','Business Licensing ','Company Organization','Customer Support','Data Analytics','Industry Knowledge','Insurance','Intellectual Property ','Legal Reg
         
# mentors = pd.DataFrame(np.random.choice([0, 1, 2, 3, 4, 5], size=[1000, 18], p=[0.85, 0.02, 0.02, 0.02, 0.03, 0.06]), columns=areas)
# business = pd.DataFrame(np.random.choice([False, True], size=[1000, 18], p=[0.9, 0.1]), columns=areas)

def binarize(df):
    return df.applymap(lambda x: 5 if x == True else 0)

def cosine_sim(a, b):
    cos_sim = np.dot(a, b)/(np.linalg.norm(a)*np.linalg.norm(b))
    return cos_sim

def top_matches_mentors(individual, business_db, k):
    areas = business_db.columns.tolist()
    business_array = binarize(business_db).to_numpy()
    sim_scores = []

    for x in business_array:
        sim_scores.append(cosine_sim(individual, x))

    sim_scores = np.array(sim_scores)
    sim_scores = np.nan_to_num(sim_scores)

    top = sim_scores.argsort()[-k:][::-1]
    probs = sim_scores[top[-k:]]

    for i in range(k):
        print(top[i], "with match:", probs[i])

        area = np.where(business_db.iloc[top[i],:] == True)[0]
        print('Areas:')
        print([areas[i] for i in area])

        print()

    return (top, probs)

# top_matches_mentors(mentors.iloc[600], business, 10)


# use double braces [[]] when calling iloc to return a dataframe
def top_matches_business(business, mentor_db, k):
    areas = mentor_db.columns.tolist()
    mentor_array = mentor_db.to_numpy()
    bin_business = binarize(business).to_numpy()
    sim_scores = []

    for x in mentor_array:
        sim_scores.extend(cosine_sim(bin_business, x))

    sim_scores = np.array(sim_scores)
    sim_scores = np.nan_to_num(sim_scores)

    top = sim_scores.argsort()[-k:][::-1]
    probs = sim_scores[top[-k:]]

    for i in range(k):
        print(top[i], "with match:", probs[i])

        print('Advanced Areas: \t')
        ad_area = np.where(mentor_db.iloc[top[i],:] == 5)[0]
        print([areas[i] for i in ad_area])

        print('Intermediate Areas: \t')
        int_area = np.where((mentor_db.iloc[top[i],:] == 4) | (mentor_db.iloc[top[i],:] == 3))[0]
        print([areas[i] for i in int_area])
        
        print('Beginner Areas: \t')
        beg_area = np.where((mentor_db.iloc[top[i],:] == 2) | (mentor_db.iloc[top[i],:] == 1))[0]
        print([areas[i] for i in beg_area])

        print()

    return (top, probs)
    
# top_matches_business(business.iloc[[15]], mentors, 10)

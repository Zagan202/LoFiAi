import random
import os

group1 = ('The', 'One', 'good', 'morning', 'sunshine', 'HM', 'Surf',
        'Spring', 'In', 'La', 'Handsome', 'People', 'Tomorrow', 'Soul', 'Blue',
        'Orchard', 'rosebuds', 'Moonshine''Tomorrow', 'Never', 'Knows', 'John', 'Wildflower',
        'Wherever', 'You', 'Are', 'Drop', 'Top', 'Thinking', 'of', 'You',
        'Morningview', 'last', 'time', 'Cycles', 'friends', 'worries', 'within', 'At',
        'Peace', 'Sticky', 'men', 'cry', 'over', 'it', 'Flunked', 'This', 'Semester',
        'park', 'walk', 'lost', 'found', '5AM', 'Unreleased',
        'Untitled', 'Balcony', 'dreamin', 'Tomorrow', 'Take', 'Care', 'Wherever',
        'Honeypot', 'Dromeda', 'love', 'bruh''nobody', 'offtherecord', 'empty', 'stay',
        'inside', 'Eternal', 'smile', 'trees', 'Cloudsurfing', 'Youth', 'never', 'reality', 'Lonely',
        'tired', 'love', 'existence', 'sad', 'Waves', 'storms', 'moon', '[BLOSSOM.]',
        'Crossings', 'skyrate', 'Home', 'John', 'Without', 'Guttered', 'red', 'Favorite', '[DESIRE.]',
        'serene', '303', '6am', 'sayonara', '[REVIVE.]', 'floating', 'misery', 'TheEnd', 'Fujitsu',
        'cute', 'alone', 'night', 'Overcast', 'Moonwalker',
        'miss', 'Allure', 'Soul', 'soft', 'flower', 'letters', 'die', 'dream', 'moments')

path = 'C:\\Users\\lawre\\Documents\\School\\Spring 18\\CMPS115\\Generated Music'
files = os.listdir(path)

for file in files:
    os.rename(os.path.join(path, file),os.path.join(path, random.choice(group1) + " " + random.choice(group1) + '.wav'))

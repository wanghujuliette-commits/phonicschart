import { PhonicsCategory } from "./types";

export const PHONICS_DATA: PhonicsCategory[] = [
  {
    id: "short_vowels",
    title: "Short Vowels (单元音)",
    icon: "Square",
    patterns: [
      {
        id: "short_a",
        pattern: "a",
        description: "Short /æ/ sound",
        ipa: "/æ/",
        examples: [
          { word: "bag", syllables: ["bag"], sentence: "The red bag is heavy.", highlight: "a" },
          { word: "cat", syllables: ["cat"], sentence: "The cat sat on the mat.", highlight: "a" },
          { word: "apple", syllables: ["ap", "ple"], sentence: "I ate a juicy apple.", highlight: "a" },
          { word: "map", syllables: ["map"], sentence: "Look at the map.", highlight: "a" },
          { word: "bat", syllables: ["bat"], sentence: "Hit the ball with the bat.", highlight: "a" },
          { word: "hat", syllables: ["hat"], sentence: "Wear a hat in the sun.", highlight: "a" },
          { word: "fan", syllables: ["fan"], sentence: "The fan keeps me cool.", highlight: "a" },
        ]
      },
      {
        id: "short_e",
        pattern: "e",
        description: "Short /e/ sound",
        ipa: "/e/",
        examples: [
          { word: "hen", syllables: ["hen"], sentence: "The hen laid an egg.", highlight: "e" },
          { word: "bed", syllables: ["bed"], sentence: "Time to go to bed.", highlight: "e" },
          { word: "red", syllables: ["red"], sentence: "The rose is red.", highlight: "e" },
          { word: "web", syllables: ["web"], sentence: "Spiders make a web.", highlight: "e" },
          { word: "pen", syllables: ["pen"], sentence: "Write with a blue pen.", highlight: "e" },
          { word: "leg", syllables: ["leg"], sentence: "Hop on one leg.", highlight: "e" },
          { word: "net", syllables: ["net"], sentence: "Catch the butterfly in the net.", highlight: "e" },
        ]
      },
      {
        id: "short_i",
        pattern: "i",
        description: "Short /ɪ/ sound",
        ipa: "/ɪ/",
        examples: [
          { word: "pig", syllables: ["pig"], sentence: "The pig played in the mud.", highlight: "i" },
          { word: "fish", syllables: ["fish"], sentence: "Fish swim in the sea.", highlight: "i" },
          { word: "sit", syllables: ["sit"], sentence: "Please sit down.", highlight: "i" },
          { word: "big", syllables: ["big"], sentence: "The elephant is big.", highlight: "i" },
          { word: "lip", syllables: ["lip"], sentence: "Bite your lip.", highlight: "i" },
          { word: "pin", syllables: ["pin"], sentence: "A sharp safety pin.", highlight: "i" },
          { word: "win", syllables: ["win"], sentence: "I want to win the game.", highlight: "i" },
        ]
      },
      {
        id: "short_o",
        pattern: "o",
        description: "Short /ɒ/ sound",
        ipa: "/ɒ/",
        examples: [
          { word: "dog", syllables: ["dog"], sentence: "My dog loves to run.", highlight: "o" },
          { word: "box", syllables: ["box"], sentence: "What is inside the box?", highlight: "o" },
          { word: "hot", syllables: ["hot"], sentence: "The sun is hot.", highlight: "o" },
          { word: "frog", syllables: ["frog"], sentence: "The frog jumps high.", highlight: "o" },
          { word: "log", syllables: ["log"], sentence: "The frog sat on a log.", highlight: "o" },
          { word: "pot", syllables: ["pot"], sentence: "Cook soup in a pot.", highlight: "o" },
          { word: "fox", syllables: ["fox"], sentence: "The clever fox.", highlight: "o" },
        ]
      },
      {
        id: "short_u",
        pattern: "u",
        description: "Short /ʌ/ sound",
        ipa: "/ʌ/",
        examples: [
          { word: "bus", syllables: ["bus"], sentence: "The bus is yellow.", highlight: "u" },
          { word: "sun", syllables: ["sun"], sentence: "The sun is hot today.", highlight: "u" },
          { word: "cup", syllables: ["cup"], sentence: "Drink from the cup.", highlight: "u" },
          { word: "run", syllables: ["run"], sentence: "Run fast!", highlight: "u" },
          { word: "nut", syllables: ["nut"], sentence: "A squirrel eats a nut.", highlight: "u" },
          { word: "rug", syllables: ["rug"], sentence: "Wipe your feet on the rug.", highlight: "u" },
          { word: "bug", syllables: ["bug"], sentence: "A small crawling bug.", highlight: "u" },
        ]
      }
    ]
  },
  {
    id: "magic_e",
    title: "Magic E (Silent E)",
    icon: "Sparkles",
    patterns: [
      {
        id: "a_e",
        pattern: "a_e",
        description: "Long A /eɪ/",
        ipa: "/eɪ/",
        examples: [
          { word: "cake", syllables: ["cake"], sentence: "I want chocolate cake.", highlight: "a" },
          { word: "snake", syllables: ["snake"], sentence: "The snake is green.", highlight: "a" },
          { word: "make", syllables: ["make"], sentence: "Let's make a wish.", highlight: "a" },
          { word: "lake", syllables: ["lake"], sentence: "Swim in the lake.", highlight: "a" },
          { word: "gate", syllables: ["gate"], sentence: "Open the garden gate.", highlight: "a" },
          { word: "name", syllables: ["name"], sentence: "Write your name.", highlight: "a" },
        ]
      },
      {
        id: "i_e",
        pattern: "i_e",
        description: "Long I /aɪ/",
        ipa: "/aɪ/",
        examples: [
          { word: "bike", syllables: ["bike"], sentence: "Ride your bike safely.", highlight: "i" },
          { word: "kite", syllables: ["kite"], sentence: "Fly a kite high.", highlight: "i" },
          { word: "five", syllables: ["five"], sentence: "I have five fingers.", highlight: "i" },
          { word: "time", syllables: ["time"], sentence: "What time is it?", highlight: "i" },
          { word: "ride", syllables: ["ride"], sentence: "Ride a pony.", highlight: "i" },
          { word: "like", syllables: ["like"], sentence: "I like ice cream.", highlight: "i" },
        ]
      },
      {
        id: "o_e",
        pattern: "o_e",
        description: "Long O /əʊ/",
        ipa: "/əʊ/",
        examples: [
          { word: "rose", syllables: ["rose"], sentence: "The rose smells nice.", highlight: "o" },
          { word: "bone", syllables: ["bone"], sentence: "The dog wants a bone.", highlight: "o" },
          { word: "home", syllables: ["home"], sentence: "Let's go home.", highlight: "o" },
          { word: "nose", syllables: ["nose"], sentence: "Touch your nose.", highlight: "o" },
          { word: "rope", syllables: ["rope"], sentence: "Jump over the rope.", highlight: "o" },
          { word: "stone", syllables: ["stone"], sentence: "Throw a stone in the water.", highlight: "o" },
        ]
      },
      {
        id: "u_e",
        pattern: "u_e",
        description: "Long U /juː/",
        ipa: "/juː/",
        examples: [
          { word: "cute", syllables: ["cute"], sentence: "The kitten is cute.", highlight: "u" },
          { word: "cube", syllables: ["cube"], sentence: "An ice cube is cold.", highlight: "u" },
          { word: "tube", syllables: ["tube"], sentence: "Squeeze the toothpaste tube.", highlight: "u" },
          { word: "mule", syllables: ["mule"], sentence: "The mule carried the pack.", highlight: "u" },
          { word: "huge", syllables: ["huge"], sentence: "The giant was huge.", highlight: "u" },
          { word: "dune", syllables: ["dune"], sentence: "A sand dune in the desert.", highlight: "u" },
        ]
      }
    ]
  },
  {
    id: "vowel_teams",
    title: "Vowel Teams (Variations)",
    icon: "Music2",
    patterns: [
      {
        id: "ai_rain",
        pattern: "ai",
        description: "Long A /eɪ/",
        ipa: "/eɪ/",
        examples: [
          { word: "rain", syllables: ["rain"], sentence: "I like the rain.", highlight: "ai" },
          { word: "wait", syllables: ["wait"], sentence: "Wait for me.", highlight: "ai" },
          { word: "tail", syllables: ["tail"], sentence: "The dog wags its tail.", highlight: "ai" },
          { word: "mail", syllables: ["mail"], sentence: "Check the mail.", highlight: "ai" },
          { word: "sail", syllables: ["sail"], sentence: "Sail across the ocean.", highlight: "ai" },
          { word: "train", syllables: ["train"], sentence: "The train moves fast.", highlight: "ai" },
        ]
      },
      {
        id: "ay_day",
        pattern: "ay",
        description: "Long A /eɪ/",
        ipa: "/eɪ/",
        examples: [
          { word: "day", syllables: ["day"], sentence: "Have a nice day.", highlight: "ay" },
          { word: "play", syllables: ["play"], sentence: "Let's play outside.", highlight: "ay" },
          { word: "say", syllables: ["say"], sentence: "What did you say?", highlight: "ay" },
          { word: "way", syllables: ["way"], sentence: "Which way to go?", highlight: "ay" },
          { word: "stay", syllables: ["stay"], sentence: "Stay right here.", highlight: "ay" },
          { word: "tray", syllables: ["tray"], sentence: "Carry the food on a tray.", highlight: "ay" },
        ]
      },
      {
        id: "ee_tree",
        pattern: "ee",
        description: "Long E /iː/",
        ipa: "/iː/",
        examples: [
          { word: "tree", syllables: ["tree"], sentence: "Climb the tree.", highlight: "ee" },
          { word: "bee", syllables: ["bee"], sentence: "Buzzy bee.", highlight: "ee" },
          { word: "feet", syllables: ["feet"], sentence: "Stomp your feet.", highlight: "ee" },
          { word: "green", syllables: ["green"], sentence: "The grass is green.", highlight: "ee" },
          { word: "see", syllables: ["see"], sentence: "I see a bird.", highlight: "ee" },
          { word: "seed", syllables: ["seed"], sentence: "Plant a tiny seed.", highlight: "ee" },
        ]
      },
      {
        id: "ea_long",
        pattern: "ea (meat)",
        description: "Long /i:/ sound",
        ipa: "/i:/",
        examples: [
          { word: "meat", syllables: ["meat"], sentence: "He eats meat for dinner.", highlight: "ea" },
          { word: "tea", syllables: ["tea"], sentence: "A cup of hot tea.", highlight: "ea" },
          { word: "read", syllables: ["read"], sentence: "I read a book.", highlight: "ea" },
          { word: "seat", syllables: ["seat"], sentence: "Take a seat.", highlight: "ea" },
          { word: "eat", syllables: ["eat"], sentence: "Time to eat lunch.", highlight: "ea" },
          { word: "leaf", syllables: ["leaf"], sentence: "A green leaf fell.", highlight: "ea" },
        ]
      },
      {
        id: "ea_short",
        pattern: "ea (bread)",
        description: "Short /e/ sound",
        ipa: "/e/",
        examples: [
          { word: "bread", syllables: ["bread"], sentence: "Toast the bread.", highlight: "ea" },
          { word: "head", syllables: ["head"], sentence: "Wear a hat on your head.", highlight: "ea" },
          { word: "ready", syllables: ["read", "y"], sentence: "Are you ready?", highlight: "ea" },
          { word: "feather", syllables: ["feath", "er"], sentence: "Light as a feather.", highlight: "ea" },
          { word: "heavy", syllables: ["heav", "y"], sentence: "The box is heavy.", highlight: "ea" },
          { word: "sweater", syllables: ["sweat", "er"], sentence: "Wear a warm sweater.", highlight: "ea" },
        ]
      },
      {
        id: "ea_break",
        pattern: "ea (steak)",
        description: "Sound /eɪ/",
        ipa: "/eɪ/",
        examples: [
          { word: "steak", syllables: ["steak"], sentence: "A juicy steak.", highlight: "ea" },
          { word: "break", syllables: ["break"], sentence: "Don't break the glass.", highlight: "ea" },
          { word: "great", syllables: ["great"], sentence: "You did a great job.", highlight: "ea" },
          { word: "yea", syllables: ["yea"], sentence: "Yea or nay?", highlight: "ea" },
        ]
      },
      {
        id: "oa_boat",
        pattern: "oa",
        description: "Long /əʊ/ sound",
        ipa: "/əʊ/",
        examples: [
          { word: "boat", syllables: ["boat"], sentence: "Row the boat.", highlight: "oa" },
          { word: "coat", syllables: ["coat"], sentence: "Wear a warm coat.", highlight: "oa" },
          { word: "road", syllables: ["road"], sentence: "Cross the road.", highlight: "oa" },
          { word: "soap", syllables: ["soap"], sentence: "Wash hands with soap.", highlight: "oa" },
          { word: "goat", syllables: ["goat"], sentence: "The goat has horns.", highlight: "oa" },
          { word: "toast", syllables: ["toast"], sentence: "Butter the toast.", highlight: "oa" },
        ]
      },
      {
        id: "ow_cow",
        pattern: "ow (cow)",
        description: "Sound /aʊ/",
        ipa: "/aʊ/",
        examples: [
          { word: "cow", syllables: ["cow"], sentence: "The cow says moo.", highlight: "ow" },
          { word: "owl", syllables: ["owl"], sentence: "An owl hoots at night.", highlight: "ow" },
          { word: "town", syllables: ["town"], sentence: "We live in a town.", highlight: "ow" },
          { word: "brown", syllables: ["brown"], sentence: "A brown bear.", highlight: "ow" },
          { word: "clown", syllables: ["clown"], sentence: "The funny clown.", highlight: "ow" },
          { word: "down", syllables: ["down"], sentence: "Sit down please.", highlight: "ow" },
        ]
      },
      {
        id: "ow_snow",
        pattern: "ow (snow)",
        description: "Sound /əʊ/",
        ipa: "/əʊ/",
        examples: [
          { word: "snow", syllables: ["snow"], sentence: "Snow is cold and white.", highlight: "ow" },
          { word: "slow", syllables: ["slow"], sentence: "Turtles are slow.", highlight: "ow" },
          { word: "show", syllables: ["show"], sentence: "Watch the show.", highlight: "ow" },
          { word: "grow", syllables: ["grow"], sentence: "Flowers grow in spring.", highlight: "ow" },
          { word: "low", syllables: ["low"], sentence: "The shelf is low.", highlight: "ow" },
          { word: "window", syllables: ["win", "dow"], sentence: "Look out the window.", highlight: "ow" },
        ]
      },
      {
        id: "oo_moon",
        pattern: "oo (moon)",
        description: "Long /uː/",
        ipa: "/uː/",
        examples: [
          { word: "moon", syllables: ["moon"], sentence: "The moon shines at night.", highlight: "oo" },
          { word: "spoon", syllables: ["spoon"], sentence: "Eat soup with a spoon.", highlight: "oo" },
          { word: "zoo", syllables: ["zoo"], sentence: "Animals live in the zoo.", highlight: "oo" },
          { word: "room", syllables: ["room"], sentence: "Clean your room.", highlight: "oo" },
          { word: "food", syllables: ["food"], sentence: "Delicious food.", highlight: "oo" },
          { word: "pool", syllables: ["pool"], sentence: "Swim in the pool.", highlight: "oo" },
        ]
      },
      {
        id: "oo_book",
        pattern: "oo (book)",
        description: "Short /ʊ/",
        ipa: "/ʊ/",
        examples: [
          { word: "book", syllables: ["book"], sentence: "Read a good book.", highlight: "oo" },
          { word: "look", syllables: ["look"], sentence: "Look at the stars.", highlight: "oo" },
          { word: "foot", syllables: ["foot"], sentence: "I hurt my foot.", highlight: "oo" },
          { word: "good", syllables: ["good"], sentence: "Have a good day.", highlight: "oo" },
          { word: "cook", syllables: ["cook"], sentence: "Cook dinner.", highlight: "oo" },
          { word: "wood", syllables: ["wood"], sentence: "Chop the wood.", highlight: "oo" },
        ]
      },
      {
        id: "ou_cloud",
        pattern: "ou (cloud)",
        description: "Sound /aʊ/",
        ipa: "/aʊ/",
        examples: [
          { word: "cloud", syllables: ["cloud"], sentence: "A fluffy white cloud.", highlight: "ou" },
          { word: "mouse", syllables: ["mouse"], sentence: "The mouse is small.", highlight: "ou" },
          { word: "house", syllables: ["house"], sentence: "Come to my house.", highlight: "ou" },
          { word: "out", syllables: ["out"], sentence: "Go out and play.", highlight: "ou" },
          { word: "mouth", syllables: ["mouth"], sentence: "Open your mouth.", highlight: "ou" },
          { word: "sound", syllables: ["sound"], sentence: "Listen to the sound.", highlight: "ou" },
        ]
      },
      {
        id: "ou_soup",
        pattern: "ou (soup)",
        description: "Sound /uː/",
        ipa: "/uː/",
        examples: [
          { word: "soup", syllables: ["soup"], sentence: "Hot chicken soup.", highlight: "ou" },
          { word: "group", syllables: ["group"], sentence: "A group of friends.", highlight: "ou" },
          { word: "you", syllables: ["you"], sentence: "How are you?", highlight: "ou" },
          { word: "youth", syllables: ["youth"], sentence: "Enjoy your youth.", highlight: "ou" },
          { word: "wound", syllables: ["wound"], sentence: "Bandage the wound.", highlight: "ou" },
        ]
      },
      {
        id: "oi_coin",
        pattern: "oi",
        description: "Sound /ɔɪ/",
        ipa: "/ɔɪ/",
        examples: [
          { word: "coin", syllables: ["coin"], sentence: "Flip a coin.", highlight: "oi" },
          { word: "boil", syllables: ["boil"], sentence: "Boil the water.", highlight: "oi" },
          { word: "soil", syllables: ["soil"], sentence: "Plant in the soil.", highlight: "oi" },
          { word: "oil", syllables: ["oil"], sentence: "Pour the oil.", highlight: "oi" },
          { word: "join", syllables: ["join"], sentence: "Join the club.", highlight: "oi" },
          { word: "point", syllables: ["point"], sentence: "Point at the map.", highlight: "oi" },
        ]
      },
      {
        id: "oy_boy",
        pattern: "oy",
        description: "Sound /ɔɪ/",
        ipa: "/ɔɪ/",
        examples: [
          { word: "boy", syllables: ["boy"], sentence: "The boy runs fast.", highlight: "oy" },
          { word: "toy", syllables: ["toy"], sentence: "Share your toy.", highlight: "oy" },
          { word: "joy", syllables: ["joy"], sentence: "Jump for joy.", highlight: "oy" },
          { word: "enjoy", syllables: ["en", "joy"], sentence: "Enjoy your meal.", highlight: "oy" },
          { word: "soy", syllables: ["soy"], sentence: "Soy sauce.", highlight: "oy" },
          { word: "royal", syllables: ["roy", "al"], sentence: "The royal family.", highlight: "oy" },
        ]
      },
      {
        id: "au_sauce",
        pattern: "au",
        description: "Sound /ɔː/",
        ipa: "/ɔː/",
        examples: [
          { word: "sauce", syllables: ["sauce"], sentence: "Tomato sauce.", highlight: "au" },
          { word: "pause", syllables: ["pause"], sentence: "Pause the movie.", highlight: "au" },
          { word: "launch", syllables: ["launch"], sentence: "Rocket launch.", highlight: "au" },
          { word: "August", syllables: ["Au", "gust"], sentence: "August is summer.", highlight: "Au" },
          { word: "haul", syllables: ["haul"], sentence: "Haul the heavy load.", highlight: "au" },
          { word: "auto", syllables: ["au", "to"], sentence: "Auto repair shop.", highlight: "au" },
        ]
      },
      {
        id: "aw_saw",
        pattern: "aw",
        description: "Sound /ɔː/",
        ipa: "/ɔː/",
        examples: [
          { word: "saw", syllables: ["saw"], sentence: "I saw a bird.", highlight: "aw" },
          { word: "paw", syllables: ["paw"], sentence: "A cat's paw.", highlight: "aw" },
          { word: "draw", syllables: ["draw"], sentence: "Draw a picture.", highlight: "aw" },
          { word: "lawn", syllables: ["lawn"], sentence: "Mow the lawn.", highlight: "aw" },
          { word: "straw", syllables: ["straw"], sentence: "Drink through a straw.", highlight: "aw" },
          { word: "yawn", syllables: ["yawn"], sentence: "Cover your mouth when you yawn.", highlight: "aw" },
        ]
      },
      {
        id: "ie_pie",
        pattern: "ie (pie)",
        description: "Sound /aɪ/",
        ipa: "/aɪ/",
        examples: [
          { word: "pie", syllables: ["pie"], sentence: "Apple pie is sweet.", highlight: "ie" },
          { word: "lie", syllables: ["lie"], sentence: "Never tell a lie.", highlight: "ie" },
          { word: "tie", syllables: ["tie"], sentence: "Wear a tie.", highlight: "ie" },
          { word: "die", syllables: ["die"], sentence: "Flowers die without water.", highlight: "ie" },
          { word: "fried", syllables: ["fried"], sentence: "Fried chicken.", highlight: "ie" },
          { word: "cried", syllables: ["cried"], sentence: "The baby cried.", highlight: "ie" },
        ]
      },
      {
        id: "ie_chief",
        pattern: "ie (chief)",
        description: "Sound /iː/",
        ipa: "/iː/",
        examples: [
          { word: "chief", syllables: ["chief"], sentence: "The fire chief.", highlight: "ie" },
          { word: "field", syllables: ["field"], sentence: "Run in the field.", highlight: "ie" },
          { word: "piece", syllables: ["piece"], sentence: "A piece of cake.", highlight: "ie" },
          { word: "thief", syllables: ["thief"], sentence: "The thief stole a jewel.", highlight: "ie" },
          { word: "shield", syllables: ["shield"], sentence: "A knight's shield.", highlight: "ie" },
          { word: "believe", syllables: ["be", "lieve"], sentence: "I believe in magic.", highlight: "ie" },
        ]
      }
    ]
  },
  {
    id: "y_vowel",
    title: "Y as a Vowel",
    icon: "HelpCircle",
    patterns: [
      {
        id: "y_cry",
        pattern: "y (cry)",
        description: "Sound /aɪ/ at end",
        ipa: "/aɪ/",
        examples: [
          { word: "cry", syllables: ["cry"], sentence: "Don't cry baby.", highlight: "y" },
          { word: "fly", syllables: ["fly"], sentence: "Birds fly high.", highlight: "y" },
          { word: "sky", syllables: ["sky"], sentence: "The sky is blue.", highlight: "y" },
          { word: "dry", syllables: ["dry"], sentence: "Keep your clothes dry.", highlight: "y" },
          { word: "my", syllables: ["my"], sentence: "This is my book.", highlight: "y" },
          { word: "try", syllables: ["try"], sentence: "Try your best.", highlight: "y" },
        ]
      },
      {
        id: "y_happy",
        pattern: "y (happy)",
        description: "Sound /i/ at end",
        ipa: "/i/",
        examples: [
          { word: "happy", syllables: ["hap", "py"], sentence: "I am so happy.", highlight: "y" },
          { word: "baby", syllables: ["ba", "by"], sentence: "A cute baby.", highlight: "y" },
          { word: "sunny", syllables: ["sun", "ny"], sentence: "It is a sunny day.", highlight: "y" },
          { word: "puppy", syllables: ["pup", "py"], sentence: "Play with the puppy.", highlight: "y" },
          { word: "candy", syllables: ["can", "dy"], sentence: "Sweet candy.", highlight: "y" },
          { word: "funny", syllables: ["fun", "ny"], sentence: "That joke was funny.", highlight: "y" },
        ]
      }
    ]
  },
  {
    id: "consonant_rules",
    title: "Consonant Rules (C/G/CH)",
    icon: "Settings",
    patterns: [
      {
        id: "hard_c",
        pattern: "Hard C",
        description: "Sound /k/",
        ipa: "/k/",
        examples: [
          { word: "cat", syllables: ["cat"], sentence: "Pet the cat.", highlight: "c" },
          { word: "cup", syllables: ["cup"], sentence: "A cup of tea.", highlight: "c" },
          { word: "cake", syllables: ["cake"], sentence: "Bake a cake.", highlight: "c" },
          { word: "car", syllables: ["car"], sentence: "Drive the car.", highlight: "c" },
          { word: "coat", syllables: ["coat"], sentence: "Put on your coat.", highlight: "c" },
          { word: "cold", syllables: ["cold"], sentence: "Ice is cold.", highlight: "c" },
        ]
      },
      {
        id: "soft_c",
        pattern: "Soft C",
        description: "Sound /s/ (ce, ci, cy)",
        ipa: "/s/",
        examples: [
          { word: "city", syllables: ["cit", "y"], sentence: "A big busy city.", highlight: "c" },
          { word: "ice", syllables: ["ice"], sentence: "Ice is cold.", highlight: "c" },
          { word: "face", syllables: ["face"], sentence: "Wash your face.", highlight: "c" },
          { word: "pencil", syllables: ["pen", "cil"], sentence: "Write with a pencil.", highlight: "c" },
          { word: "dance", syllables: ["dance"], sentence: "Let's dance.", highlight: "c" },
          { word: "circle", syllables: ["cir", "cle"], sentence: "Draw a circle.", highlight: "c" },
        ]
      },
      {
        id: "hard_g",
        pattern: "Hard G",
        description: "Sound /g/",
        ipa: "/g/",
        examples: [
          { word: "goat", syllables: ["goat"], sentence: "The goat eats grass.", highlight: "g" },
          { word: "game", syllables: ["game"], sentence: "Play a game.", highlight: "g" },
          { word: "gate", syllables: ["gate"], sentence: "Close the garden gate.", highlight: "g" },
          { word: "gas", syllables: ["gas"], sentence: "The car needs gas.", highlight: "g" },
          { word: "gum", syllables: ["gum"], sentence: "Chewing gum.", highlight: "g" },
          { word: "gold", syllables: ["gold"], sentence: "Shiny gold coin.", highlight: "g" },
        ]
      },
      {
        id: "soft_g",
        pattern: "Soft G",
        description: "Sound /dʒ/ (ge, gi, gy)",
        ipa: "/dʒ/",
        examples: [
          { word: "giraffe", syllables: ["gi", "raffe"], sentence: "A tall giraffe.", highlight: "g" },
          { word: "huge", syllables: ["huge"], sentence: "The elephant is huge.", highlight: "g" },
          { word: "magic", syllables: ["mag", "ic"], sentence: "Do a magic trick.", highlight: "g" },
          { word: "cage", syllables: ["cage"], sentence: "Bird in a cage.", highlight: "g" },
          { word: "gym", syllables: ["gym"], sentence: "Exercise at the gym.", highlight: "g" },
          { word: "ginger", syllables: ["gin", "ger"], sentence: "Ginger tea.", highlight: "g" },
        ]
      },
      {
        id: "ch_chair",
        pattern: "ch (chair)",
        description: "Sound /tʃ/",
        ipa: "/tʃ/",
        examples: [
          { word: "chair", syllables: ["chair"], sentence: "Sit on the chair.", highlight: "ch" },
          { word: "lunch", syllables: ["lunch"], sentence: "Eat your lunch.", highlight: "ch" },
          { word: "cheese", syllables: ["cheese"], sentence: "I like cheese.", highlight: "ch" },
          { word: "chin", syllables: ["chin"], sentence: "Touch your chin.", highlight: "ch" },
          { word: "beach", syllables: ["beach"], sentence: "Play at the beach.", highlight: "ch" },
          { word: "chop", syllables: ["chop"], sentence: "Chop the carrots.", highlight: "ch" },
        ]
      },
      {
        id: "ch_school",
        pattern: "ch (school)",
        description: "Sound /k/",
        ipa: "/k/",
        examples: [
          { word: "school", syllables: ["school"], sentence: "Go to school.", highlight: "ch" },
          { word: "ache", syllables: ["ache"], sentence: "I have a headache.", highlight: "ch" },
          { word: "echo", syllables: ["ech", "o"], sentence: "Hear the echo.", highlight: "ch" },
          { word: "anchor", syllables: ["an", "chor"], sentence: "Drop the anchor.", highlight: "ch" },
          { word: "chorus", syllables: ["cho", "rus"], sentence: "Sing in the chorus.", highlight: "ch" },
          { word: "stomach", syllables: ["stom", "ach"], sentence: "My stomach is full.", highlight: "ch" },
        ]
      },
      {
        id: "ch_chef",
        pattern: "ch (chef)",
        description: "Sound /ʃ/",
        ipa: "/ʃ/",
        examples: [
          { word: "chef", syllables: ["chef"], sentence: "The chef cooks food.", highlight: "ch" },
          { word: "machine", syllables: ["ma", "chine"], sentence: "A washing machine.", highlight: "ch" },
          { word: "chute", syllables: ["chute"], sentence: "Slide down the chute.", highlight: "ch" },
          { word: "parachute", syllables: ["par", "a", "chute"], sentence: "Jump with a parachute.", highlight: "ch" },
          { word: "mustache", syllables: ["mus", "tache"], sentence: "He has a mustache.", highlight: "ch" },
          { word: "brochure", syllables: ["bro", "chure"], sentence: "Read the travel brochure.", highlight: "ch" },
        ]
      }
    ]
  },
  {
    id: "other_digraphs",
    title: "Other Digraphs",
    icon: "GitMerge",
    patterns: [
      {
        id: "sh",
        pattern: "sh",
        description: "Sound /ʃ/",
        ipa: "/ʃ/",
        examples: [
          { word: "ship", syllables: ["ship"], sentence: "The ship sails.", highlight: "sh" },
          { word: "fish", syllables: ["fish"], sentence: "Fish in the water.", highlight: "sh" },
          { word: "shoe", syllables: ["shoe"], sentence: "Tie your shoe.", highlight: "sh" },
          { word: "shop", syllables: ["shop"], sentence: "Let's go to the shop.", highlight: "sh" },
          { word: "shell", syllables: ["shell"], sentence: "Seashell on the sand.", highlight: "sh" },
          { word: "brush", syllables: ["brush"], sentence: "Brush your hair.", highlight: "sh" },
        ]
      },
      {
        id: "th_soft",
        pattern: "th (soft)",
        description: "Unvoiced /θ/",
        ipa: "/θ/",
        examples: [
          { word: "thumb", syllables: ["thumb"], sentence: "Thumbs up.", highlight: "th" },
          { word: "think", syllables: ["think"], sentence: "Think about it.", highlight: "th" },
          { word: "math", syllables: ["math"], sentence: "I like math class.", highlight: "th" },
          { word: "bath", syllables: ["bath"], sentence: "Take a bubble bath.", highlight: "th" },
          { word: "thin", syllables: ["thin"], sentence: "The paper is thin.", highlight: "th" },
          { word: "thank", syllables: ["thank"], sentence: "Say thank you.", highlight: "th" },
        ]
      },
      {
        id: "th_hard",
        pattern: "th (hard)",
        description: "Voiced /ð/",
        ipa: "/ð/",
        examples: [
          { word: "this", syllables: ["this"], sentence: "This is fun.", highlight: "th" },
          { word: "that", syllables: ["that"], sentence: "Look at that.", highlight: "th" },
          { word: "father", syllables: ["fa", "ther"], sentence: "My father is tall.", highlight: "th" },
          { word: "then", syllables: ["then"], sentence: "And then we slept.", highlight: "th" },
          { word: "mother", syllables: ["mo", "ther"], sentence: "I love my mother.", highlight: "th" },
          { word: "brother", syllables: ["bro", "ther"], sentence: "Play with my brother.", highlight: "th" },
        ]
      },
      {
        id: "ph",
        pattern: "ph",
        description: "Sound /f/",
        ipa: "/f/",
        examples: [
          { word: "phone", syllables: ["phone"], sentence: "Answer the phone.", highlight: "ph" },
          { word: "dolphin", syllables: ["dol", "phin"], sentence: "Dolphins jump.", highlight: "ph" },
          { word: "photo", syllables: ["pho", "to"], sentence: "Take a photo.", highlight: "ph" },
          { word: "elephant", syllables: ["el", "e", "phant"], sentence: "The elephant has a trunk.", highlight: "ph" },
          { word: "graph", syllables: ["graph"], sentence: "Draw a graph.", highlight: "ph" },
          { word: "alphabet", syllables: ["al", "pha", "bet"], sentence: "Learn the alphabet.", highlight: "ph" },
        ]
      },
      {
        id: "wh",
        pattern: "wh",
        description: "Sound /w/",
        ipa: "/w/",
        examples: [
          { word: "whale", syllables: ["whale"], sentence: "A blue whale.", highlight: "wh" },
          { word: "white", syllables: ["white"], sentence: "White snow.", highlight: "wh" },
          { word: "wheel", syllables: ["wheel"], sentence: "The wheel turns.", highlight: "wh" },
          { word: "whip", syllables: ["whip"], sentence: "Crack the whip.", highlight: "wh" },
          { word: "whistle", syllables: ["whis", "tle"], sentence: "Blow the whistle.", highlight: "wh" },
          { word: "whisper", syllables: ["whis", "per"], sentence: "Whisper a secret.", highlight: "wh" },
          { word: "wheat", syllables: ["wheat"], sentence: "Wheat grows in the field.", highlight: "wh" },
          { word: "whisk", syllables: ["whisk"], sentence: "Whisk the eggs.", highlight: "wh" },
          { word: "where", syllables: ["where"], sentence: "Where are you going?", highlight: "wh" },
        ]
      },
      {
        id: "ck",
        pattern: "ck",
        description: "Sound /k/ at end",
        ipa: "/k/",
        examples: [
          { word: "duck", syllables: ["duck"], sentence: "Quack goes the duck.", highlight: "ck" },
          { word: "sock", syllables: ["sock"], sentence: "Put on a sock.", highlight: "ck" },
          { word: "clock", syllables: ["clock"], sentence: "Check the clock.", highlight: "ck" },
          { word: "rock", syllables: ["rock"], sentence: "A hard rock.", highlight: "ck" },
          { word: "kick", syllables: ["kick"], sentence: "Kick the ball.", highlight: "ck" },
          { word: "black", syllables: ["black"], sentence: "The night is black.", highlight: "ck" },
          { word: "neck", syllables: ["neck"], sentence: "Wear a necklace on your neck.", highlight: "ck" },
          { word: "truck", syllables: ["truck"], sentence: "Drive the truck.", highlight: "ck" },
          { word: "stick", syllables: ["stick"], sentence: "Pick up a stick.", highlight: "ck" },
        ]
      },
      {
        id: "tch",
        pattern: "tch",
        description: "Sound /tʃ/ (after short vowel)",
        ipa: "/tʃ/",
        examples: [
          { word: "catch", syllables: ["catch"], sentence: "Catch the ball.", highlight: "tch" },
          { word: "match", syllables: ["match"], sentence: "These socks do not match.", highlight: "tch" },
          { word: "kitchen", syllables: ["kitch", "en"], sentence: "Cooking in the kitchen.", highlight: "tch" },
          { word: "watch", syllables: ["watch"], sentence: "Watch TV.", highlight: "tch" },
          { word: "witch", syllables: ["witch"], sentence: "The witch flies on a broom.", highlight: "tch" },
          { word: "patch", syllables: ["patch"], sentence: "Sew a patch on the pants.", highlight: "tch" },
          { word: "scratch", syllables: ["scratch"], sentence: "Don't scratch the bite.", highlight: "tch" },
          { word: "switch", syllables: ["switch"], sentence: "Flip the light switch.", highlight: "tch" },
          { word: "stretch", syllables: ["stretch"], sentence: "Stretch your arms.", highlight: "tch" },
        ]
      },
      {
        id: "ng",
        pattern: "ng",
        description: "Sound /ŋ/",
        ipa: "/ŋ/",
        examples: [
          { word: "ring", syllables: ["ring"], sentence: "A gold ring.", highlight: "ng" },
          { word: "song", syllables: ["song"], sentence: "Sing a song.", highlight: "ng" },
          { word: "king", syllables: ["king"], sentence: "The king wears a crown.", highlight: "ng" },
          { word: "wing", syllables: ["wing"], sentence: "Bird's wing.", highlight: "ng" },
          { word: "long", syllables: ["long"], sentence: "A long rope.", highlight: "ng" },
          { word: "swing", syllables: ["swing"], sentence: "Play on the swing.", highlight: "ng" },
        ]
      },
      {
        id: "nk",
        pattern: "nk",
        description: "Sound /ŋk/",
        ipa: "/ŋk/",
        examples: [
          { word: "pink", syllables: ["pink"], sentence: "The color pink.", highlight: "nk" },
          { word: "bank", syllables: ["bank"], sentence: "Save money in the bank.", highlight: "nk" },
          { word: "sink", syllables: ["sink"], sentence: "Wash hands in the sink.", highlight: "nk" },
          { word: "wink", syllables: ["wink"], sentence: "Wink your eye.", highlight: "nk" },
          { word: "tank", syllables: ["tank"], sentence: "Fish tank.", highlight: "nk" },
          { word: "junk", syllables: ["junk"], sentence: "Clean up the junk.", highlight: "nk" },
        ]
      }
    ]
  },
  {
    id: "r_blends",
    title: "R-Blends",
    icon: "Wind",
    patterns: [
      {
        id: "br",
        pattern: "br",
        description: "Blend /br/",
        ipa: "/br/",
        examples: [
          { word: "bread", syllables: ["bread"], sentence: "Fresh bread.", highlight: "br" },
          { word: "brick", syllables: ["brick"], sentence: "Red brick wall.", highlight: "br" },
          { word: "brown", syllables: ["brown"], sentence: "Brown bear.", highlight: "br" },
          { word: "broom", syllables: ["broom"], sentence: "Sweep with a broom.", highlight: "br" },
          { word: "brush", syllables: ["brush"], sentence: "Paint brush.", highlight: "br" },
          { word: "brave", syllables: ["brave"], sentence: "Be brave.", highlight: "br" },
        ]
      },
      {
        id: "cr",
        pattern: "cr",
        description: "Blend /kr/",
        ipa: "/kr/",
        examples: [
          { word: "crab", syllables: ["crab"], sentence: "Crab on the beach.", highlight: "cr" },
          { word: "cry", syllables: ["cry"], sentence: "Don't cry.", highlight: "cr" },
          { word: "crown", syllables: ["crown"], sentence: "Wear a crown.", highlight: "cr" },
          { word: "crib", syllables: ["crib"], sentence: "Baby in a crib.", highlight: "cr" },
          { word: "cross", syllables: ["cross"], sentence: "Cross the street.", highlight: "cr" },
          { word: "crash", syllables: ["crash"], sentence: "Loud crash.", highlight: "cr" },
        ]
      },
      {
        id: "dr",
        pattern: "dr",
        description: "Blend /dr/",
        ipa: "/dr/",
        examples: [
          { word: "drum", syllables: ["drum"], sentence: "Bang the drum.", highlight: "dr" },
          { word: "dress", syllables: ["dress"], sentence: "Pretty dress.", highlight: "dr" },
          { word: "drink", syllables: ["drink"], sentence: "Drink water.", highlight: "dr" },
          { word: "drop", syllables: ["drop"], sentence: "Don't drop it.", highlight: "dr" },
          { word: "drive", syllables: ["drive"], sentence: "Drive the car.", highlight: "dr" },
          { word: "dream", syllables: ["dream"], sentence: "Sweet dream.", highlight: "dr" },
        ]
      },
      {
        id: "fr",
        pattern: "fr",
        description: "Blend /fr/",
        ipa: "/fr/",
        examples: [
          { word: "frog", syllables: ["frog"], sentence: "Green frog.", highlight: "fr" },
          { word: "fruit", syllables: ["fruit"], sentence: "Eat fresh fruit.", highlight: "fr" },
          { word: "friend", syllables: ["friend"], sentence: "My best friend.", highlight: "fr" },
          { word: "fry", syllables: ["fry"], sentence: "Fry an egg.", highlight: "fr" },
          { word: "fresh", syllables: ["fresh"], sentence: "Fresh air.", highlight: "fr" },
          { word: "free", syllables: ["free"], sentence: "Set the bird free.", highlight: "fr" },
        ]
      },
      {
        id: "gr",
        pattern: "gr",
        description: "Blend /gr/",
        ipa: "/gr/",
        examples: [
          { word: "green", syllables: ["green"], sentence: "Green grass.", highlight: "gr" },
          { word: "grape", syllables: ["grape"], sentence: "Sweet grape.", highlight: "gr" },
          { word: "grass", syllables: ["grass"], sentence: "Cut the grass.", highlight: "gr" },
          { word: "grow", syllables: ["grow"], sentence: "Watch the plant grow.", highlight: "gr" },
          { word: "grab", syllables: ["grab"], sentence: "Grab the ball.", highlight: "gr" },
          { word: "great", syllables: ["great"], sentence: "You are doing great.", highlight: "gr" },
        ]
      },
      {
        id: "pr",
        pattern: "pr",
        description: "Blend /pr/",
        ipa: "/pr/",
        examples: [
          { word: "prize", syllables: ["prize"], sentence: "Win a prize.", highlight: "pr" },
          { word: "print", syllables: ["print"], sentence: "Print the paper.", highlight: "pr" },
          { word: "press", syllables: ["press"], sentence: "Press the button.", highlight: "pr" },
          { word: "pray", syllables: ["pray"], sentence: "Pray before bed.", highlight: "pr" },
          { word: "proud", syllables: ["proud"], sentence: "I am proud of you.", highlight: "pr" },
          { word: "price", syllables: ["price"], sentence: "What is the price?", highlight: "pr" },
        ]
      },
      {
        id: "tr",
        pattern: "tr",
        description: "Blend /tr/",
        ipa: "/tr/",
        examples: [
          { word: "tree", syllables: ["tree"], sentence: "Climb the tree.", highlight: "tr" },
          { word: "train", syllables: ["train"], sentence: "Ride the train.", highlight: "tr" },
          { word: "truck", syllables: ["truck"], sentence: "Big red truck.", highlight: "tr" },
          { word: "trip", syllables: ["trip"], sentence: "Go on a trip.", highlight: "tr" },
          { word: "track", syllables: ["track"], sentence: "Run on the track.", highlight: "tr" },
          { word: "try", syllables: ["try"], sentence: "Try again.", highlight: "tr" },
        ]
      }
    ]
  },
  {
    id: "l_blends",
    title: "L-Blends",
    icon: "AlignLeft",
    patterns: [
      {
        id: "bl",
        pattern: "bl",
        description: "Blend /bl/",
        ipa: "/bl/",
        examples: [
          { word: "blue", syllables: ["blue"], sentence: "The sky is blue.", highlight: "bl" },
          { word: "black", syllables: ["black"], sentence: "Black cat.", highlight: "bl" },
          { word: "block", syllables: ["block"], sentence: "Building block.", highlight: "bl" },
          { word: "blow", syllables: ["blow"], sentence: "Blow bubbles.", highlight: "bl" },
          { word: "blink", syllables: ["blink"], sentence: "Blink your eyes.", highlight: "bl" },
          { word: "blanket", syllables: ["blan", "ket"], sentence: "Warm blanket.", highlight: "bl" },
        ]
      },
      {
        id: "cl",
        pattern: "cl",
        description: "Blend /kl/",
        ipa: "/kl/",
        examples: [
          { word: "clap", syllables: ["clap"], sentence: "Clap your hands.", highlight: "cl" },
          { word: "cloud", syllables: ["cloud"], sentence: "White cloud.", highlight: "cl" },
          { word: "clean", syllables: ["clean"], sentence: "Clean your room.", highlight: "cl" },
          { word: "clock", syllables: ["clock"], sentence: "Look at the clock.", highlight: "cl" },
          { word: "class", syllables: ["class"], sentence: "Go to class.", highlight: "cl" },
          { word: "clown", syllables: ["clown"], sentence: "Funny clown.", highlight: "cl" },
        ]
      },
      {
        id: "fl",
        pattern: "fl",
        description: "Blend /fl/",
        ipa: "/fl/",
        examples: [
          { word: "flag", syllables: ["flag"], sentence: "Wave the flag.", highlight: "fl" },
          { word: "flower", syllables: ["flow", "er"], sentence: "Smell the flower.", highlight: "fl" },
          { word: "fly", syllables: ["fly"], sentence: "Birds fly.", highlight: "fl" },
          { word: "float", syllables: ["float"], sentence: "Boats float on water.", highlight: "fl" },
          { word: "floor", syllables: ["floor"], sentence: "Sit on the floor.", highlight: "fl" },
          { word: "flame", syllables: ["flame"], sentence: "Candle flame.", highlight: "fl" },
        ]
      },
      {
        id: "gl",
        pattern: "gl",
        description: "Blend /gl/",
        ipa: "/gl/",
        examples: [
          { word: "glass", syllables: ["glass"], sentence: "Drink from a glass.", highlight: "gl" },
          { word: "globe", syllables: ["globe"], sentence: "Spin the globe.", highlight: "gl" },
          { word: "glue", syllables: ["glue"], sentence: "Sticky glue.", highlight: "gl" },
          { word: "glow", syllables: ["glow"], sentence: "Fireflies glow.", highlight: "gl" },
          { word: "glad", syllables: ["glad"], sentence: "I am glad.", highlight: "gl" },
          { word: "glove", syllables: ["glove"], sentence: "Baseball glove.", highlight: "gl" },
        ]
      },
      {
        id: "pl",
        pattern: "pl",
        description: "Blend /pl/",
        ipa: "/pl/",
        examples: [
          { word: "play", syllables: ["play"], sentence: "Let's play.", highlight: "pl" },
          { word: "plane", syllables: ["plane"], sentence: "Fly on a plane.", highlight: "pl" },
          { word: "plant", syllables: ["plant"], sentence: "Water the plant.", highlight: "pl" },
          { word: "plum", syllables: ["plum"], sentence: "Juicy plum.", highlight: "pl" },
          { word: "plate", syllables: ["plate"], sentence: "Eat from a plate.", highlight: "pl" },
          { word: "plus", syllables: ["plus"], sentence: "Two plus two.", highlight: "pl" },
        ]
      },
      {
        id: "sl",
        pattern: "sl",
        description: "Blend /sl/",
        ipa: "/sl/",
        examples: [
          { word: "slide", syllables: ["slide"], sentence: "Go down the slide.", highlight: "sl" },
          { word: "sleep", syllables: ["sleep"], sentence: "Go to sleep.", highlight: "sl" },
          { word: "slow", syllables: ["slow"], sentence: "Snails are slow.", highlight: "sl" },
          { word: "slip", syllables: ["slip"], sentence: "Don't slip on ice.", highlight: "sl" },
          { word: "sled", syllables: ["sled"], sentence: "Ride the sled.", highlight: "sl" },
          { word: "slug", syllables: ["slug"], sentence: "Garden slug.", highlight: "sl" },
        ]
      }
    ]
  },
  {
    id: "s_blends",
    title: "S-Blends",
    icon: "Activity",
    patterns: [
      {
        id: "sc",
        pattern: "sc",
        description: "Blend /sk/",
        ipa: "/sk/",
        examples: [
          { word: "scarf", syllables: ["scarf"], sentence: "Wear a scarf.", highlight: "sc" },
          { word: "scale", syllables: ["scale"], sentence: "Weigh on a scale.", highlight: "sc" },
          { word: "scoot", syllables: ["scoot"], sentence: "Scoot over.", highlight: "sc" },
          { word: "scan", syllables: ["scan"], sentence: "Scan the barcode.", highlight: "sc" },
          { word: "scare", syllables: ["scare"], sentence: "Don't scare me.", highlight: "sc" },
          { word: "score", syllables: ["score"], sentence: "What is the score?", highlight: "sc" },
        ]
      },
      {
        id: "sk",
        pattern: "sk",
        description: "Blend /sk/",
        ipa: "/sk/",
        examples: [
          { word: "skip", syllables: ["skip"], sentence: "Skip rope.", highlight: "sk" },
          { word: "sky", syllables: ["sky"], sentence: "Blue sky.", highlight: "sk" },
          { word: "skunk", syllables: ["skunk"], sentence: "Smelly skunk.", highlight: "sk" },
          { word: "skate", syllables: ["skate"], sentence: "Ice skate.", highlight: "sk" },
          { word: "skin", syllables: ["skin"], sentence: "Soft skin.", highlight: "sk" },
          { word: "skirt", syllables: ["skirt"], sentence: "Wear a skirt.", highlight: "sk" },
        ]
      },
      {
        id: "sm",
        pattern: "sm",
        description: "Blend /sm/",
        ipa: "/sm/",
        examples: [
          { word: "smile", syllables: ["smile"], sentence: "Big smile.", highlight: "sm" },
          { word: "small", syllables: ["small"], sentence: "Small mouse.", highlight: "sm" },
          { word: "smell", syllables: ["smell"], sentence: "Smell the rose.", highlight: "sm" },
          { word: "smart", syllables: ["smart"], sentence: "You are smart.", highlight: "sm" },
          { word: "smoke", syllables: ["smoke"], sentence: "Fire and smoke.", highlight: "sm" },
          { word: "smooth", syllables: ["smooth"], sentence: "Smooth stone.", highlight: "sm" },
        ]
      },
      {
        id: "sn",
        pattern: "sn",
        description: "Blend /sn/",
        ipa: "/sn/",
        examples: [
          { word: "snake", syllables: ["snake"], sentence: "Hissing snake.", highlight: "sn" },
          { word: "snow", syllables: ["snow"], sentence: "Cold snow.", highlight: "sn" },
          { word: "snap", syllables: ["snap"], sentence: "Snap your fingers.", highlight: "sn" },
          { word: "snail", syllables: ["snail"], sentence: "Slow snail.", highlight: "sn" },
          { word: "snack", syllables: ["snack"], sentence: "Eat a snack.", highlight: "sn" },
          { word: "sneeze", syllables: ["sneeze"], sentence: "Achoo! Sneeze.", highlight: "sn" },
        ]
      },
      {
        id: "sp",
        pattern: "sp",
        description: "Blend /sp/",
        ipa: "/sp/",
        examples: [
          { word: "spoon", syllables: ["spoon"], sentence: "Silver spoon.", highlight: "sp" },
          { word: "spot", syllables: ["spot"], sentence: "X marks the spot.", highlight: "sp" },
          { word: "spin", syllables: ["spin"], sentence: "Spin around.", highlight: "sp" },
          { word: "spill", syllables: ["spill"], sentence: "Don't spill the milk.", highlight: "sp" },
          { word: "space", syllables: ["space"], sentence: "Outer space.", highlight: "sp" },
          { word: "speak", syllables: ["speak"], sentence: "Speak clearly.", highlight: "sp" },
        ]
      },
      {
        id: "st",
        pattern: "st",
        description: "Blend /st/",
        ipa: "/st/",
        examples: [
          { word: "star", syllables: ["star"], sentence: "Bright star.", highlight: "st" },
          { word: "stop", syllables: ["stop"], sentence: "Stop sign.", highlight: "st" },
          { word: "step", syllables: ["step"], sentence: "Watch your step.", highlight: "st" },
          { word: "stand", syllables: ["stand"], sentence: "Stand up.", highlight: "st" },
          { word: "stone", syllables: ["stone"], sentence: "Skip a stone.", highlight: "st" },
          { word: "stick", syllables: ["stick"], sentence: "Pick up a stick.", highlight: "st" },
        ]
      },
      {
        id: "sw",
        pattern: "sw",
        description: "Blend /sw/",
        ipa: "/sw/",
        examples: [
          { word: "swim", syllables: ["swim"], sentence: "Swim in the pool.", highlight: "sw" },
          { word: "sweet", syllables: ["sweet"], sentence: "Candy is sweet.", highlight: "sw" },
          { word: "swan", syllables: ["swan"], sentence: "Graceful swan.", highlight: "sw" },
          { word: "swing", syllables: ["swing"], sentence: "Play on the swing.", highlight: "sw" },
          { word: "sweep", syllables: ["sweep"], sentence: "Sweep the floor.", highlight: "sw" },
          { word: "switch", syllables: ["switch"], sentence: "Flip the switch.", highlight: "sw" },
        ]
      },
      {
        id: "str",
        pattern: "str",
        description: "Blend /str/",
        ipa: "/str/",
        examples: [
          { word: "street", syllables: ["street"], sentence: "Look both ways before crossing the street.", highlight: "str" },
          { word: "strong", syllables: ["strong"], sentence: "The ant is small but strong.", highlight: "str" },
          { word: "string", syllables: ["string"], sentence: "Tie the package with string.", highlight: "str" },
          { word: "straw", syllables: ["straw"], sentence: "Drink through a straw.", highlight: "str" },
          { word: "stripe", syllables: ["stripe"], sentence: "A shirt with a stripe.", highlight: "str" },
          { word: "stream", syllables: ["stream"], sentence: "Water flows in the stream.", highlight: "str" },
        ]
      }
    ]
  },
  {
    id: "silent_letters",
    title: "Silent Letters",
    icon: "EyeOff",
    patterns: [
      {
        id: "kn",
        pattern: "kn",
        description: "Silent k /n/",
        ipa: "/n/",
        examples: [
          { word: "knee", syllables: ["knee"], sentence: "Bend your knee.", highlight: "kn" },
          { word: "know", syllables: ["know"], sentence: "I know the answer.", highlight: "kn" },
          { word: "knife", syllables: ["knife"], sentence: "Sharp knife.", highlight: "kn" },
          { word: "knock", syllables: ["knock"], sentence: "Knock on the door.", highlight: "kn" },
          { word: "knot", syllables: ["knot"], sentence: "Tie a knot.", highlight: "kn" },
          { word: "knight", syllables: ["knight"], sentence: "The brave knight.", highlight: "kn" },
        ]
      },
      {
        id: "wr",
        pattern: "wr",
        description: "Silent w /r/",
        ipa: "/r/",
        examples: [
          { word: "write", syllables: ["write"], sentence: "Write your name.", highlight: "wr" },
          { word: "wrong", syllables: ["wrong"], sentence: "Right or wrong.", highlight: "wr" },
          { word: "wrist", syllables: ["wrist"], sentence: "Watch on wrist.", highlight: "wr" },
          { word: "wrap", syllables: ["wrap"], sentence: "Wrap the gift.", highlight: "wr" },
          { word: "wreck", syllables: ["wreck"], sentence: "Ship wreck.", highlight: "wr" },
          { word: "wreath", syllables: ["wreath"], sentence: "Holiday wreath.", highlight: "wr" },
        ]
      },
      {
        id: "mb",
        pattern: "mb",
        description: "Silent b /m/",
        ipa: "/m/",
        examples: [
          { word: "lamb", syllables: ["lamb"], sentence: "Little lamb.", highlight: "mb" },
          { word: "thumb", syllables: ["thumb"], sentence: "Suck your thumb.", highlight: "mb" },
          { word: "climb", syllables: ["climb"], sentence: "Climb the hill.", highlight: "mb" },
          { word: "comb", syllables: ["comb"], sentence: "Comb your hair.", highlight: "mb" },
          { word: "crumb", syllables: ["crumb"], sentence: "A cookie crumb.", highlight: "mb" },
          { word: "bomb", syllables: ["bomb"], sentence: "Tick tock bomb.", highlight: "mb" },
        ]
      },
      {
        id: "gn",
        pattern: "gn",
        description: "Silent g /n/",
        ipa: "/n/",
        examples: [
          { word: "gnat", syllables: ["gnat"], sentence: "Tiny gnat.", highlight: "gn" },
          { word: "sign", syllables: ["sign"], sentence: "Stop sign.", highlight: "gn" },
          { word: "gnome", syllables: ["gnome"], sentence: "Garden gnome.", highlight: "gn" },
          { word: "design", syllables: ["de", "sign"], sentence: "Cool design.", highlight: "gn" },
          { word: "align", syllables: ["a", "lign"], sentence: "Align the wheels.", highlight: "gn" },
          { word: "reign", syllables: ["reign"], sentence: "The king's reign.", highlight: "gn" },
        ]
      }
    ]
  },
  {
    id: "special_endings",
    title: "Special Endings",
    icon: "Award",
    patterns: [
      {
        id: "ture",
        pattern: "ture",
        description: "Sound /tʃər/",
        ipa: "/tʃər/",
        examples: [
          { word: "picture", syllables: ["pic", "ture"], sentence: "Take a picture.", highlight: "ture" },
          { word: "nature", syllables: ["na", "ture"], sentence: "Love nature.", highlight: "ture" },
          { word: "future", syllables: ["fu", "ture"], sentence: "The future is bright.", highlight: "ture" },
          { word: "adventure", syllables: ["ad", "ven", "ture"], sentence: "Go on an adventure.", highlight: "ture" },
          { word: "capture", syllables: ["cap", "ture"], sentence: "Capture the flag.", highlight: "ture" },
          { word: "mixture", syllables: ["mix", "ture"], sentence: "Stir the mixture.", highlight: "ture" },
        ]
      },
      {
        id: "tion",
        pattern: "tion",
        description: "Sound /ʃən/",
        ipa: "/ʃən/",
        examples: [
          { word: "station", syllables: ["sta", "tion"], sentence: "Train station.", highlight: "tion" },
          { word: "action", syllables: ["ac", "tion"], sentence: "Lights, camera, action.", highlight: "tion" },
          { word: "lotion", syllables: ["lo", "tion"], sentence: "Rub on lotion.", highlight: "tion" },
          { word: "motion", syllables: ["mo", "tion"], sentence: "Slow motion.", highlight: "tion" },
          { word: "nation", syllables: ["na", "tion"], sentence: "One nation.", highlight: "tion" },
          { word: "option", syllables: ["op", "tion"], sentence: "Choose an option.", highlight: "tion" },
        ]
      },
      {
        id: "sion",
        pattern: "sion",
        description: "Sound /ʒən/ or /ʃən/",
        ipa: "/ʒən/",
        examples: [
          { word: "vision", syllables: ["vi", "sion"], sentence: "Perfect vision.", highlight: "sion" },
          { word: "mansion", syllables: ["man", "sion"], sentence: "Huge mansion.", highlight: "sion" },
          { word: "television", syllables: ["tel", "e", "vi", "sion"], sentence: "Watch television.", highlight: "sion" },
          { word: "confusion", syllables: ["con", "fu", "sion"], sentence: "Lots of confusion.", highlight: "sion" },
          { word: "decision", syllables: ["de", "ci", "sion"], sentence: "Make a decision.", highlight: "sion" },
          { word: "explosion", syllables: ["ex", "plo", "sion"], sentence: "Loud explosion.", highlight: "sion" },
        ]
      },
      {
        id: "ous",
        pattern: "ous",
        description: "Sound /əs/",
        ipa: "/əs/",
        examples: [
          { word: "famous", syllables: ["fa", "mous"], sentence: "Famous star.", highlight: "ous" },
          { word: "nervous", syllables: ["ner", "vous"], sentence: "Don't be nervous.", highlight: "ous" },
          { word: "dangerous", syllables: ["dan", "ger", "ous"], sentence: "Dangerous animal.", highlight: "ous" },
          { word: "curious", syllables: ["cu", "ri", "ous"], sentence: "Curious cat.", highlight: "ous" },
          { word: "serious", syllables: ["se", "ri", "ous"], sentence: "Be serious.", highlight: "ous" },
          { word: "delicious", syllables: ["de", "li", "cious"], sentence: "Delicious food.", highlight: "ous" },
        ]
      }
    ]
  },
  {
    id: "r_controlled",
    title: "R-Controlled Vowels",
    icon: "RotateCw",
    patterns: [
      {
        id: "ar",
        pattern: "ar",
        description: "Sound /ɑː/",
        ipa: "/ɑː/",
        examples: [
          { word: "car", syllables: ["car"], sentence: "Drive the car.", highlight: "ar" },
          { word: "star", syllables: ["star"], sentence: "Shining star.", highlight: "ar" },
          { word: "far", syllables: ["far"], sentence: "Far away.", highlight: "ar" },
          { word: "jar", syllables: ["jar"], sentence: "Cookie jar.", highlight: "ar" },
          { word: "park", syllables: ["park"], sentence: "Play in the park.", highlight: "ar" },
          { word: "arm", syllables: ["arm"], sentence: "Raise your arm.", highlight: "ar" },
        ]
      },
      {
        id: "er_fern",
        pattern: "er (fern)",
        description: "Stressed /ɜː/",
        ipa: "/ɜː/",
        examples: [
          { word: "fern", syllables: ["fern"], sentence: "Green fern.", highlight: "er" },
          { word: "herd", syllables: ["herd"], sentence: "A herd of cows.", highlight: "er" },
          { word: "term", syllables: ["term"], sentence: "School term.", highlight: "er" },
          { word: "person", syllables: ["per", "son"], sentence: "Nice person.", highlight: "er" },
          { word: "perch", syllables: ["perch"], sentence: "Bird on a perch.", highlight: "er" },
          { word: "germ", syllables: ["germ"], sentence: "Wash away the germ.", highlight: "er" },
        ]
      },
      {
        id: "er_water",
        pattern: "er (water)",
        description: "Unstressed /ə/",
        ipa: "/ə/",
        examples: [
          { word: "water", syllables: ["wa", "ter"], sentence: "Drink water.", highlight: "er" },
          { word: "tiger", syllables: ["ti", "ger"], sentence: "Striped tiger.", highlight: "er" },
          { word: "paper", syllables: ["pa", "per"], sentence: "Write on paper.", highlight: "er" },
          { word: "mother", syllables: ["mo", "ther"], sentence: "Love my mother.", highlight: "er" },
          { word: "teacher", syllables: ["tea", "cher"], sentence: "Listen to the teacher.", highlight: "er" },
          { word: "letter", syllables: ["let", "ter"], sentence: "Mail a letter.", highlight: "er" },
        ]
      },
      {
        id: "ir",
        pattern: "ir",
        description: "Sound /ɜː/",
        ipa: "/ɜː/",
        examples: [
          { word: "bird", syllables: ["bird"], sentence: "Singing bird.", highlight: "ir" },
          { word: "girl", syllables: ["girl"], sentence: "Happy girl.", highlight: "ir" },
          { word: "shirt", syllables: ["shirt"], sentence: "Blue shirt.", highlight: "ir" },
          { word: "dirt", syllables: ["dirt"], sentence: "Dig in the dirt.", highlight: "ir" },
          { word: "skirt", syllables: ["skirt"], sentence: "Twirl in a skirt.", highlight: "ir" },
          { word: "first", syllables: ["first"], sentence: "First place.", highlight: "ir" },
        ]
      },
      {
        id: "or_corn",
        pattern: "or (corn)",
        description: "Sound /ɔː/",
        ipa: "/ɔː/",
        examples: [
          { word: "corn", syllables: ["corn"], sentence: "Yellow corn.", highlight: "or" },
          { word: "fork", syllables: ["fork"], sentence: "Knife and fork.", highlight: "or" },
          { word: "storm", syllables: ["storm"], sentence: "Rain storm.", highlight: "or" },
          { word: "born", syllables: ["born"], sentence: "New born baby.", highlight: "or" },
          { word: "horn", syllables: ["horn"], sentence: "Honk the horn.", highlight: "or" },
          { word: "short", syllables: ["short"], sentence: "Tall and short.", highlight: "or" },
        ]
      },
      {
        id: "or_doctor",
        pattern: "or (doctor)",
        description: "Unstressed /ə/",
        ipa: "/ə/",
        examples: [
          { word: "doctor", syllables: ["doc", "tor"], sentence: "See the doctor.", highlight: "or" },
          { word: "actor", syllables: ["ac", "tor"], sentence: "Movie actor.", highlight: "or" },
          { word: "visitor", syllables: ["vis", "i", "tor"], sentence: "We have a visitor.", highlight: "or" },
          { word: "tractor", syllables: ["trac", "tor"], sentence: "Drive the tractor.", highlight: "or" },
          { word: "sailor", syllables: ["sail", "or"], sentence: "Sailor on a ship.", highlight: "or" },
          { word: "mirror", syllables: ["mir", "ror"], sentence: "Look in the mirror.", highlight: "or" },
        ]
      },
      {
        id: "ur",
        pattern: "ur",
        description: "Sound /ɜː/",
        ipa: "/ɜː/",
        examples: [
          { word: "turtle", syllables: ["tur", "tle"], sentence: "Slow turtle.", highlight: "ur" },
          { word: "purple", syllables: ["pur", "ple"], sentence: "Purple grape.", highlight: "ur" },
          { word: "surf", syllables: ["surf"], sentence: "Surf the waves.", highlight: "ur" },
          { word: "burn", syllables: ["burn"], sentence: "Fire will burn.", highlight: "ur" },
          { word: "turn", syllables: ["turn"], sentence: "Turn around.", highlight: "ur" },
          { word: "nurse", syllables: ["nurse"], sentence: "The nurse helps.", highlight: "ur" },
        ]
      },
      {
        id: "air_chair",
        pattern: "air",
        description: "Sound /eə/",
        ipa: "/eə/",
        examples: [
          { word: "hair", syllables: ["hair"], sentence: "Brush your hair.", highlight: "air" },
          { word: "chair", syllables: ["chair"], sentence: "Sit on the chair.", highlight: "air" },
          { word: "pair", syllables: ["pair"], sentence: "A pair of socks.", highlight: "air" },
          { word: "stair", syllables: ["stair"], sentence: "Climb the stair.", highlight: "air" },
          { word: "fair", syllables: ["fair"], sentence: "That's not fair.", highlight: "air" },
          { word: "repair", syllables: ["re", "pair"], sentence: "Repair the broken toy.", highlight: "air" },
        ]
      },
      {
        id: "are_care",
        pattern: "are",
        description: "Sound /eə/",
        ipa: "/eə/",
        examples: [
          { word: "care", syllables: ["care"], sentence: "Take care.", highlight: "are" },
          { word: "share", syllables: ["share"], sentence: "Share your toys.", highlight: "are" },
          { word: "scare", syllables: ["scare"], sentence: "Don't scare me.", highlight: "are" },
          { word: "dare", syllables: ["dare"], sentence: "I dare you.", highlight: "are" },
          { word: "spare", syllables: ["spare"], sentence: "Spare tire.", highlight: "are" },
          { word: "square", syllables: ["square"], sentence: "A box is square.", highlight: "are" },
        ]
      },
      {
        id: "ear_hear",
        pattern: "ear (hear)",
        description: "Sound /ɪə/",
        ipa: "/ɪə/",
        examples: [
          { word: "ear", syllables: ["ear"], sentence: "Listen with your ear.", highlight: "ear" },
          { word: "hear", syllables: ["hear"], sentence: "I hear a noise.", highlight: "ear" },
          { word: "near", syllables: ["near"], sentence: "Come near me.", highlight: "ear" },
          { word: "dear", syllables: ["dear"], sentence: "Dear friend.", highlight: "ear" },
          { word: "fear", syllables: ["fear"], sentence: "Have no fear.", highlight: "ear" },
          { word: "year", syllables: ["year"], sentence: "Happy New Year.", highlight: "ear" },
        ]
      },
      {
        id: "ear_bear",
        pattern: "ear (bear)",
        description: "Sound /eə/",
        ipa: "/eə/",
        examples: [
          { word: "bear", syllables: ["bear"], sentence: "Big brown bear.", highlight: "ear" },
          { word: "pear", syllables: ["pear"], sentence: "Eat a juicy pear.", highlight: "ear" },
          { word: "wear", syllables: ["wear"], sentence: "Wear a coat.", highlight: "ear" },
          { word: "tear", syllables: ["tear"], sentence: "Don't tear the paper.", highlight: "ear" },
          { word: "swear", syllables: ["swear"], sentence: "I swear it's true.", highlight: "ear" },
        ]
      }
    ]
  }
];
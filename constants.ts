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
        ]
      }
    ]
  }
];
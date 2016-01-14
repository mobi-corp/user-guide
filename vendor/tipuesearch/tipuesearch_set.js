
/*
Tipue Search 4.0
Copyright (c) 2014 Tipue
Tipue Search is released under the MIT License
http://www.tipue.com/search
*/


var tipuesearch_stop_words = ["and", "be", "by", "do", "for", "he", "how", "if", "is", "it", "my", "not", "of", "or", "the", "to", "up", "what", "when"];

var tipuesearch_replace = {"words": [
     {"word": "tipua", "replace_with": "tipue"},
     {"word": "javscript", "replace_with": "javascript"},
     {"word": "comit", "stem": "commit"},
     {"word": "comitt", "stem": "commit"},
     {"word": "comitting", "stem": "committing"},
     {"word": "commiting", "stem": "committing"},
     {"word": "comiting", "stem": "committing"},
     {"word": "moby", "stem": "mobi"},
     {"word": "apointment", "stem": "appointment"}
]};

var tipuesearch_stem = {"words": [
     {"word": "e-mail", "stem": "email"},
     {"word": "javascript", "stem": "script"},
     {"word": "javascript", "stem": "js"},
     {"word": "tech", "stem": "technician"},
     {"word": "tech", "stem": "driver"},
     {"word": "tech", "stem": "worker"},
     {"word": "vehicle", "stem": "truck"},
     {"word": "vehicles", "stem": "trucks"},
     {"word": "truck", "stem": "vehicle"},
     {"word": "trucks", "stem": "vehicles"},
     {"word": "visit", "stem": "job"},
     {"word": "visits", "stem": "jobs"},
     {"word": "job", "stem": "visit"},
     {"word": "jobs", "stem": "visits"},
     {"word": "order", "stem": "visit"},
     {"word": "orders", "stem": "visits"},
     {"word": "distance", "stem": "mileage"},
     {"word": "mileage", "stem": "distance"},
]};


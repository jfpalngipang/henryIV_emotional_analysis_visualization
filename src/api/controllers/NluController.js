import NaturalLanguageUnderstandingV1
    from 'watson-developer-cloud/natural-language-understanding/v1.js';
import fs from 'fs';
import socket from '../socket';
import path from 'path';
import * as _ from 'lodash';

let nlu = new NaturalLanguageUnderstandingV1({
    'username': 'f37a7353-73f4-47ce-8cf6-782df797b12c',
    'password': 'xy7ttJhNZxZ3',
    'version_date': '2017-02-27'
});

export default class NluController {
    static getPlay(req, res, next) {
        res.json({text_entry: 'Hello, Franz.'});
    }

    static analyze(req, res, next) {
        fs.readFile(path.join(__dirname, '../../../') + 'henry_iv.json', 'utf8', function (err, data) {
            if (err) throw err;
            let scenes = JSON.parse(data);

            _.each(scenes, (scene, i) => {
                setTimeout(() => {
                    let data = {
                        'text': scene.text_entry,
                        'features': {
                            'emotion': {}
                        },
                        'language': 'en'
                    };


                    nlu.analyze(data, (err, response) => {
                        if(err) {
                            console.log(err);
                        }
                    
                        let clientData = {
                            text_entry: data.text,
                            emotion: response? response.emotion.document.emotion : null
                        }

            
                        socket.emit(clientData);
                        
                    });
                }, 5000 * i);
            });

            res.status(200);
            
        });
    }
}






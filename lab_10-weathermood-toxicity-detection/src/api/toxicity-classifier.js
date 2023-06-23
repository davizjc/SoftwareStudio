import * as toxicity from '@tensorflow-models/toxicity';

// set the minimum prediction confidence
// const threshold = 0.3;
require('@tensorflow/tfjs');
/**
 * Predict the mood (Happy/Sad/Fear) of a sentence 
 * @param {String}   text The input sentence from user
 * @param {Function} post The props.onPost from PostForm
 */ 

// The minimum prediction confidence.
const threshold = 0.9;
// Load the model. Users optionally pass in a threshold and an array of
// labels to include.




export async function predict(text, post){
    var moodResult;

    const model = await toxicity.load(threshold);

    const predictions = await model.classify(text);

    console.log(predictions); 
    if (predictions[2].results[0].match || predictions[4].results[0].match){
        moodResult = "Fear";
    }else if (predictions[0].results[0].match || predictions[1].results[0].match 
        || predictions[3].results[0].match || predictions[5].results[0].match || 
        predictions[6].results[0].match){
        moodResult = "Sad";
    } else {
        moodResult = "Happy";
    }
    
    // 1 Load your model
    // 2 Utilize the model to classify the input
    //   The output prediction of the model is an array of objects, one for each 
    //   prediction head, that contains the raw probabilities for each input along 
    //   with the final prediction in `match` (either `true` or `false`).
    //   If neither prediction exceeds the threshold, `match` is `null`.
    // 3 Turn predict result into mood
    //   If the result contains "obscene" or "sexual explicit" then give mood = Fear
    //   Else, if it contains "identity attack", "insult", "insult", "threat", or "toxicity" => Sad
    //   Else => Happy
    // Note: `await` can be used in `async` 

  
    console.log(moodResult);
    post(moodResult, text);
}
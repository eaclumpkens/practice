const palindrome = word => {
    let backwards = word.toLowerCase().split('').reverse().join('');
    return console.log(word.toLowerCase() == backwards);
};


palindrome('Hannah');
palindrome('apple');
palindrome('mADam');
function countdown(n){
    const num = n;
    for (i=0; i <= num; i++){
        console.log(n);
        setTimeout(1000,n--);
    }
}

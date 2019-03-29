export const smartDate = (date:Date) => {
    const delta = date.getTime()-Date.now();
    if(delta < 60000) {
        return 'Just now'
    } else if(delta < 3600000) {
        return Math.floor(delta / 60000)+'minutes ago';
    } else if(delta < 259200000 ){
        return '1 hours ago';
    }else if(delta >= 259200000 ){
        return '3 day ago';
    }
    return "NOW";
}

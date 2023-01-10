parseInt(thisScore);
                switch(curentEvent){
                    case 'doubling' :
                        thisScore = points * multiplier * 2;
                        break;
                    case 'normal' :
                        thisScore = points * multiplier;
                        break;
                    case 'goldenCarrot' :
                        thisScore = points * multiplier * 3;
                        break;
                }
                break;
below is switch case example
const option = 3;

switch (option) {                                                                          start of switch block
  case 1:{                                                   start of case1 block
    console.log('Value is 1');
    }                                                      end of case1 block
    break;
  case 2:{                                                   case2 start
    console.log('Value is 2');
    }                                                       csae2 end
    break;
  case 3:{                                                  case3 start
    console.log('Value is 3');
    }                                                      case3 end
    break;
  default:
    console.log('Value is not 1, 2, or 3'); // Added default case for completeness
}                                                                                            end of switch block



if this case using '{' and '}' is not necessary since every case has only 1 line of code so we could instead write the code like this


const option = 3;

switch (option) {
  case 1:
    console.log('Value is 1');
    break;
  case 2:
    console.log('Value is 2');
    break;
  case 3:
    console.log('Value is 3');
    break;
  default:
    console.log('Value is not 1, 2, or 3'); // Added default case for completeness
}

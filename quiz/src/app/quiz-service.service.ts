import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class QuizServiceService {
  modules=[];
  questionList1=[
    {quest:'What is the scientific name of a butterfly?',
     option1:'Apis',
     option2:'Coleoptera',
     option3:'Formicidae',
     option4:'Rhopalocera',
     answer:'C'
    },
    {quest:'How hot is the surface of the sun?',
    option1:'1,233 K',
    option2:'5,778 K',
    option3:'12,130 K',
    option4:'101,300 K',
    answer:'A'
    },
    {quest:'Who are the actors in The Internship?',
    option1:'Ben Stiller, Jonah Hill',
    option2:'Courteney Cox, Matt LeBlanc',
    option3:'Kaley Cuoco, Jim Parsons',
    option4:'Vince Vaughn, Owen Wilson',
    answer:'C'
    },
    {quest:'Who are the actors in The Internship?',
    option1:'Ben Stiller, Jonah Hill',
    option2:'Courteney Cox, Matt LeBlanc',
    option3:'Kaley Cuoco, Jim Parsons',
    option4:'Vince Vaughn, Owen Wilson',
    answer:'C'
    },
    {quest:'What is the capital of Spain?',
    option1:'Berlin',
    option2:'Buenos Aires',
    option3:'Madrid',
    option4:'San Juan',
    answer:'B'
    }];

  questionList2=[
    {quest:'When was Mahatma Gandhi born?',
     option1:'October 2, 1869',
     option2:'December 15, 1872',
     option3:'July 18, 1918',
     option4:'January 30, 1929',
     answer:'A'
    },
    {quest:'How far is the moon from Earth?',
    option1:'7,918 miles (12,742 km)',
    option2:'86,881 miles (139,822 km)',
    option3:'238,400 miles (384,400 km)',
    option4:'35,980,000 miles (57,910,000 km)',
    answer:'B'
    },
    {quest:'What is 65 times 52?',
    option1:'117',
    option2:'3120',
    option3:'3380',
    option4:'3520',
    answer:'B'
    },
    {quest:'How tall is Mount Everest?',
    option1:'6,683 ft (2,037 m)',
    option2:'7,918 ft (2,413 m)',
    option3:'19,341 ft (5,895 m)',
    option4:'29,029 ft (8,847 m)',
    answer:'C'
    },
    {quest:'When did The Avengers come out?',
    option1:'May 2, 2008',
    option2:'May 4, 2012',
    option3:'May 3, 2013',
    option4:'April 4, 2014',
    answer:'A'
    }
    ];
  constructor() { }
}

interface UserMealPlan {
  week: 1 | 2 | 3 | 4 | 5 | 6 | 7 | 8 | 9 | 10 | 11 | 12;
  day: 1 | 2 | 3 | 4 | 5 | 6 | 7;
  mealNumber: 1 | 2 | 3 | 4 | 5;
  mealName: string;
  isMealDone: boolean;
};
type UserMealsPlan = UserMealPlan[];

export const fetchMealsPlan = (): UserMealsPlan => {
  // Symulacja pobierania danych z API
  return [
    {
      week: 7,
      day: 1,
      mealNumber: 1,
      mealName: 'Bod•ē Shake',
      isMealDone: true
    },
    {
      week: 7,
      day: 1,
      mealNumber: 2,
      mealName: 'Ham and Swiss Roll Ups',
      isMealDone: true
    },
    {
      week: 7,
      day: 1,
      mealNumber: 3,
      mealName: 'Turkey Melt',
      isMealDone: true
    },
    {
      week: 7,
      day: 1,
      mealNumber: 4,
      mealName: 'Bod•ē Burn with Mozzarella and Tomato Slices',
      isMealDone: true
    },
    {
      week: 7,
      day: 1,
      mealNumber: 5,
      mealName: 'Turkey Melt',
      isMealDone: false
    },
    {
      week: 7,
      day: 2,
      mealNumber: 1,
      mealName: 'Bod•ē Shake',
      isMealDone: false
    },
    {
      week: 7,
      day: 2,
      mealNumber: 2,
      mealName: 'Ham and Swiss Roll Ups',
      isMealDone: false
    },
    {
      week: 7,
      day: 2,
      mealNumber: 3,
      mealName: 'Turkey Melt',
      isMealDone: false
    },
    {
      week: 7,
      day: 2,
      mealNumber: 4,
      mealName: 'Bod•ē Burn with Mozzarella and Tomato Slices',
      isMealDone: false
    },
    {
      week: 7,
      day: 2,
      mealNumber: 5,
      mealName: 'Turkey Melt',
      isMealDone: false
    },
    {
      week: 7,
      day: 3,
      mealNumber: 1,
      mealName: 'Bod•ē Shake',
      isMealDone: false
    },
    {
      week: 7,
      day: 3,
      mealNumber: 2,
      mealName: 'Grilled Steak (HC)',
      isMealDone: false
    },
    {
      week: 7,
      day: 3,
      mealNumber: 3,
      mealName: 'Bod•ē Shake',
      isMealDone: false
    },
    {
      week: 7,
      day: 3,
      mealNumber: 4,
      mealName: 'Bod•ē Burn and Whole-Wheat English Muffin with Butter Spray',
      isMealDone: false
    },
    {
      week: 7,
      day: 3,
      mealNumber: 5,
      mealName: 'Garlic Lime Chicken (HC)',
      isMealDone: false
    },
    {
      week: 7,
      day: 4,
      mealNumber: 1,
      mealName: 'Bod•ē Shake',
      isMealDone: false
    },
    {
      week: 7,
      day: 4,
      mealNumber: 2,
      mealName: 'Ham and Swiss Roll Ups',
      isMealDone: false
    },
    {
      week: 7,
      day: 4,
      mealNumber: 3,
      mealName: 'Turkey Melt',
      isMealDone: false
    },
    {
      week: 7,
      day: 4,
      mealNumber: 4,
      mealName: 'Bod•ē Burn with Mozzarella and Tomato Slices',
      isMealDone: false
    },
    {
      week: 7,
      day: 4,
      mealNumber: 5,
      mealName: 'Turkey Melt',
      isMealDone: false
    },
    {
      week: 7,
      day: 5,
      mealNumber: 1,
      mealName: 'Bod•ē Shake',
      isMealDone: false
    },
    {
      week: 7,
      day: 5,
      mealNumber: 2,
      mealName: 'Ham and Swiss Roll Ups',
      isMealDone: false
    },
    {
      week: 7,
      day: 5,
      mealNumber: 3,
      mealName: 'Bod•ē Shake',
      isMealDone: false
    },
    {
      week: 7,
      day: 5,
      mealNumber: 4,
      mealName: 'Bod•ē Burn and Whole-Wheat English Muffin with Butter Spray',
      isMealDone: false
    },
    {
      week: 7,
      day: 5,
      mealNumber: 5,
      mealName: 'Turkey Melt',
      isMealDone: false
    },
    {
      week: 7,
      day: 6,
      mealNumber: 1,
      mealName: 'Bod•ē Shake',
      isMealDone: false
    },
    {
      week: 7,
      day: 6,
      mealNumber: 2,
      mealName: 'Grilled Steak (HC)',
      isMealDone: false
    },
    {
      week: 7,
      day: 6,
      mealNumber: 3,
      mealName: 'Bod•ē Shake',
      isMealDone: false
    },
    {
      week: 7,
      day: 6,
      mealNumber: 4,
      mealName: 'Bod•ē Burn and Whole-Wheat English Muffin with Butter Spray',
      isMealDone: false
    },
    {
      week: 7,
      day: 6,
      mealNumber: 5,
      mealName: 'Garlic Lime Chicken (HC)',
      isMealDone: false
    }
  ];
};
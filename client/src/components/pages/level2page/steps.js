//split is 1, merge is 2
export const steps = [
    {
        "stepID":1,
        "verify": 1,
        "step": "Divide the array in half by dragging the 10 numbers below into the two empty sets, and click verify!",
        "container": 2,
        "numInCon" : [5,5]
    },
    // {
    //     "stepID":2,
    //     "step": "Divide the set in half again and click verify!",
    //     "container": 4,
    //     "numInCon" : [3,2,3,2]
    // },
    // {
    //     "stepID":3,
    //     "step": "Divide the set in half again and click verify!",
    //     "container": 8,
    //     "numInCon" : [2,1,1,1,2,1,1,1]
    // },
    // {
    //     "stepID":4,
    //     "step": "Divide the set in half again and click verify!",
    //     "container": 10,
    //     "numInCon" : [1,1,1,1,1,1,1,1,1,1]
    // },
    // {
    //     "stepID":5,
    //     "step": "Merge the numbers that are ready to be merged into pairs while recusively ordering them in ascending order. Click verify!",
    //     "container": 6,
    //     "numInCon" : [2,1,2,2,1,2]
    // },
    // {
    //     "stepID":6,
    //     "step": "Continue merging the numbers that are ready to be merged together while recusively ordering them in ascending order. Click verify!",
    //     "container": 4,
    //     "numInCon" : [3,2,3,2]
    // },
    // {
    //     "stepID":7,
    //     "step": "Continue merging the numbers that are ready to be merged together while recusively ordering them in ascending order. Click verify!",
    //     "container": 2,
    //     "numInCon" : [5,5]
    // },
    // {
    //     "stepID":8,
    //     "step": "Merge the 2 groups together in ascending order. This is the end of the algorithm. Click verify!",
    //     "container": 1,
    //     "numInCon" : [10]
    // },
    {
        "stepID":2,
        "verify": 1,
        "step": "Let's first focus on only the left half of the array. Divide this set in half by dragging the first 5 numbers below into two sets, then click verify!",
        "container": 2,
        "numInCon" : [3,2]
    },
    {
        "stepID":3,
        "verify": 1,
        "step": "Divide this set in half again by dragging the first 3 numbers below into two sets, then click verify!",
        "container": 2,
        "numInCon" : [2,1]
    },
    {
        "stepID":4,
        "verify": 1,
        "step": "Continue dividing the set in half by dragging the first 2 numbers below into two sets, then click verify!",
        "container": 2,
        "numInCon" : [1,1]
    },
    {
        "stepID":5,
        "verify": 2,
        "step": "Compare the last two sets and merge the 2 numbers back together into one set in ascending order, then click verify!",
        "container": 1,
        "numInCon" : [2]
    },
    {
        "stepID":6,
        "verify": 2,
        "step": "Compare the last two sets and merge the 3 numbers back together into one set in ascending order, then click verify!",
        "container": 1,
        "numInCon" : [3]
    },
    {
        "stepID":7,
        "verify": 1,
        "step": "Divide the second part of the previous set by dragging the remaining 2 numbers into the two empty sets, then click verify!",
        "container": 2,
        "numInCon" : [1,1]
    },
    {
        "stepID":8,
        "verify": 2,
        "step": "Compare the last two sets and merge by dragging the 2 numbers back into one set, then click verify!",
        "container": 1,
        "numInCon" : [2]
    }, 
    {
        "stepID":9,
        "verify": 2,
        "step": "Compare all the numbers in the previous two sets and merge by dragging the 5 numbers back into one set in ascending order, then click verify!",
        "container": 1,
        "numInCon" : [5]
    },
    //second half
    {
        "stepID":10,
        "verify": 1,
        "step": "Now, focus on the right half of the original array. Divide the this set in half by dragging the 5 top nubmers into the two empty sets, then click verify!",
        "container": 2,
        "numInCon" : [3,2]
    },
    {
        "stepID":11,
        "verify": 1,
        "step": "Still focusing on the right half, divide again by dragging the first 3 numbers into the two empty sets, then click verify!",
        "container": 2,
        "numInCon" : [2,1]
    },
    {
        "stepID":12,
        "verify": 1,
        "step": "Continue to divide by dragging the 2 numbers into the two empty sets, then click verify!",
        "container": 2,
        "numInCon" : [1,1]
    },
    {
        "stepID":13,
        "verify": 2,
        "step": "There's only one number in the previous two sets, so the array is ready for merging. Compare the 2 numbers and merge by dragging them into one set in ascending order, then click verify!",
        "container": 1,
        "numInCon" : [2]
    },
    {
        "stepID":14,
        "verify": 2,
        "step": "Continue to merge by comparing the numbers in the last two sets and dragging the 3 numbers into the empty set in ascending order, click verify!",
        "container": 1,
        "numInCon" : [3]
    },
    {
        "stepID":15,
        "verify": 1,
        "step": "The merging is now complete for the first part of the right side. Divide the second set of containers in half by dragging the 2 numbers into two empty sets, then click verify!",
        "container": 2,
        "numInCon" : [1,1]
    },
    {
        "stepID":16,
        "verify": 2,
        "step": "There's only one number in the last two sets, so it's ready to be merged. Compare the last two sets and dragging the 2 numbers back into one empty set, in ascending order. When you are finished, click verify!",
        "container": 1,
        "numInCon" : [2]
    }, 
    {
        "stepID":17,
        "verify": 2,
        "step": "Finish merging the right side of the array back together, by comparing the last two sets and dragging the 5 numbers back into one empty set. Then, click verify!",
        "container": 1,
        "numInCon" : [5]
    },
    {
        "stepID":18,
        "verify": 2,
        "step": "You have now reached the final step of the algorithm. Complete the merging process for the entire array by comparing the numbers in the last two sets and dragging the 10 numbers back into one empty set, in ascending order. When finished, click verify!",
        "container": 1,
        "numInCon" : [10]
    },
]
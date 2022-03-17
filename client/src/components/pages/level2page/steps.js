//split is 1, merge is 2
export const steps = [
    {
        "stepID":1,
        "verify": 1,
        "step": "Divide the array in half and click verify! Click next!",
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
        "step": "Divide the first half of the set in half. Click verify!",
        "container": 2,
        "numInCon" : [3,2]
    },
    {
        "stepID":3,
        "verify": 1,
        "step": "Divide the first half of the set in half. Click verify!",
        "container": 2,
        "numInCon" : [2,1]
    },
    {
        "stepID":4,
        "verify": 1,
        "step": "Divide the first half of the set in half. Click verify!",
        "container": 2,
        "numInCon" : [1,1]
    },
    {
        "stepID":5,
        "verify": 2,
        "step": "Compare the 2 numbers and merge. Click verify!",
        "container": 1,
        "numInCon" : [2]
    },
    {
        "stepID":6,
        "verify": 2,
        "step": "Take the minimum value in the front set and compare it with the minimum number on the other set and merge. Keep merging until all number has been merged. Click verify!",
        "container": 1,
        "numInCon" : [3]
    },
    {
        "stepID":7,
        "verify": 1,
        "step": "Divide the second set of containers in half. Click verify!",
        "container": 2,
        "numInCon" : [1,1]
    },
    {
        "stepID":8,
        "verify": 2,
        "step": "Compare the 2 numbers and merge. Click verify!",
        "container": 1,
        "numInCon" : [2]
    }, 
    {
        "stepID":9,
        "verify": 2,
        "step": "Take the minimum value in the front set and compare it with the minimum number on the other set and merge. Keep merging until all number has been merged. Click verify!",
        "container": 1,
        "numInCon" : [5]
    },
    //second half
    {
        "stepID":10,
        "verify": 1,
        "step": "Divide the remaining half of the original array in half. Click verify!",
        "container": 2,
        "numInCon" : [3,2]
    },
    {
        "stepID":11,
        "verify": 1,
        "step": "Divide the first half of the set in half again. Click verify!",
        "container": 2,
        "numInCon" : [2,1]
    },
    {
        "stepID":12,
        "verify": 1,
        "step": "Divide the first half of the set in half. Click verify!",
        "container": 2,
        "numInCon" : [1,1]
    },
    {
        "stepID":13,
        "verify": 2,
        "step": "Compare the 2 numbers and merge. Click verify!",
        "container": 1,
        "numInCon" : [2]
    },
    {
        "stepID":14,
        "verify": 2,
        "step": "Take the minimum value in the front set and compare it with the minimum number on the other set and merge. Keep merging until all number has been merged. Click verify!",
        "container": 1,
        "numInCon" : [3]
    },
    {
        "stepID":15,
        "verify": 1,
        "step": "Divide the second set of containers in half. Click verify!",
        "container": 2,
        "numInCon" : [1,1]
    },
    {
        "stepID":16,
        "verify": 2,
        "step": "Compare the 2 numbers and merge. Click verify!",
        "container": 1,
        "numInCon" : [2]
    }, 
    {
        "stepID":17,
        "verify": 2,
        "step": "Take the minimum value in the front set and compare it with the minimum number on the other set and merge. Keep merging until all number has been merged. Click verify!",
        "container": 1,
        "numInCon" : [5]
    },
    {
        "stepID":18,
        "verify": 2,
        "step": "Now take the minimum value in the first set and compare with the minimum number on the second set. Then drag the number to the last container and keep comparing untill all numbers are compared and merged. Click verify!",
        "container": 1,
        "numInCon" : [10]
    },
]
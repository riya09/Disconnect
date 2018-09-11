const levels = {
    0: [
        [1, 2],
        [0, 3],
        [0, 3],
        [1, 2]
    ],
    1: [
        [1],
        [0, 2, 3, 4],
        [1, 3],
        [1, 2, 4],
        [1, 3]
    ],
    2: [
        [1, 2, 3, 4],
        [0, 2, 3],
        [0, 1],
        [0, 1],
        [0]
    ],
    3: [
        [2, 3],
        [4, 3],
        [0, 3, 5],
        [0, 1, 2, 4],
        [1, 3],
        [2]
    ],
    4: [
        [2, 3, 4],
        [2, 3],
        [0, 1, 4, 5],
        [0, 1, 5],
        [0, 2],
        [2, 3]
    ],
    5: [
        [2, 3, 4],
        [3, 4],
        [0, 3, 5],
        [0, 1, 2, 4, 5],
        [0, 1, 3],
        [2, 3],
    ],
    6: [
        [1, 3, 7],
        [0, 2, 4, 5],
        [1, 4],
        [0, 5],
        [1, 2, 6, 7],
        [1, 3, 6],
        [4, 5],
        [0, 4]
    ]
}
const positions = {
    0: [
        [150, 100],
        [350, 100],
        [150, 250],
        [350, 250]
    ],
    1: [
        [150, 100],
        [350, 100],
        [150, 250],
        [300, 250],
        [450, 400]
    ],
    2: [
        [150, 100],
        [350, 80],
        [150, 250],
        [350, 280],
        [420, 150]

    ],
    3: [
        [200, 60],
        [80, 150],
        [180, 250],
        [350, 230],
        [380, 50],
        [320, 120]
    ],
    4: [
        [150, 80],
        [30, 180],
        [200, 250],
        [350, 100],
        [320, 300],
        [400, 270]
    ],
    5: [
        [150, 100],
        [50, 150],
        [150, 260],
        [350, 300],
        [340, 180],
        [200, 50]
    ],
    6: [
        [50, 150],
        [150, 100],
        [100, 260],
        [200, 300],
        [300, 160],
        [350, 240],
        [300, 360],
        [450, 400]
    ]
}
const num_clicks = [2, 2, 2, 3, 3, 3, 4];

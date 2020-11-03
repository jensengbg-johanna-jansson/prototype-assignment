<template>
    <div class="directions">
        <transition-group name="dir-list" class="directions-directions" tag="ul">
            <li 
                v-for="direction in directions" 
                :key="direction.id"
                class="dir-list-item">
                    <p>{{ direction.direction }}</p>
            </li>
        </transition-group>
        <transition-group name="dir-ico-list" class="directions-icons" tag="ul">
            <li 
                v-for="direction in directions" 
                :key="direction.ico"
                class="dir-ico-list-item">
                    <img class="directions-icon" :src="require(`../../assets/images/${direction.ico}`)" alt="">
            </li>
        </transition-group>
    </div>
</template>

<script>
export default {
    name: 'directionsBox',
    props: {
        isDropoff: Boolean
    },
    data() {
        return {
            directionsNormal: [
                { 
                    direction: '48 m turn right',
                    id: 'dir1',
                    ico: 'right-turn.svg'
                },
                { 
                    direction: '550 m turn left',
                    id: 'dir2',
                    ico: 'left-turn.svg'
                },
                { 
                    direction: '2.5 km turn right',
                    id: 'dir3',
                    ico: 'right-turn.svg'
                },
                { 
                    direction: '1.1 km turn left',
                    id: 'dir4',
                    ico: 'left-turn.svg'
                },
                { 
                    direction: '750 turn right',
                    id: 'dir5',
                    ico: 'slight-right-turn.svg'
                },
                { 
                    direction: '2 km turn left',
                    id: 'dir6',
                    ico: 'left-turn.svg'
                },
                { 
                    direction: '94 m turn left',
                    id: 'dir7',
                    ico: 'left-turn.svg'
                },
                { 
                    direction: '230 m destination on the right',
                    id: 'dir8',
                    ico: 'goal.svg'
                }
            ],
            directionsReverse: [
                { 
                    direction: '230 m turn right',
                    id: 'dir1',
                    ico: 'right-turn.svg'
                },
                { 
                    direction: '94 m turn right',
                    id: 'dir2',
                    ico: 'right-turn.svg'
                },
                { 
                    direction: '2 km turn right',
                    id: 'dir3',
                    ico: 'slight-left-turn.svg'
                },
                { 
                    direction: '750 m turn right',
                    id: 'dir4',
                    ico: 'right-turn.svg'
                },
                { 
                    direction: '1.1 km turn left',
                    id: 'dir5',
                    ico: 'left-turn.svg'
                },
                { 
                    direction: '2.5 km turn right',
                    id: 'dir6',
                    ico: 'right-turn.svg'
                },
                { 
                    direction: '550 m turn left',
                    id: 'dir7',
                    ico: 'left-turn.svg'
                },
                { 
                    direction: '48 m destination on the right',
                    id: 'dir8',
                    ico: 'goal.svg'
                }
            ]
        }
    },
    computed: {
        directions() {
            if(this.isDropoff) {
                return this.directionsReverse;
            } else {
                return this.directionsNormal;
            }
        }
    },
    methods: {
        startTimer() {
            setTimeout(() => {
                this.directions.shift();
                
                setTimeout(() => {
                    this.directions.shift();
                    
                    setTimeout(() => {
                        this.directions.shift();
                        
                        setTimeout(() => {
                            this.directions.shift();
                            
                            setTimeout(() => {
                                this.directions.shift();
                                
                                setTimeout(() => {
                                    this.directions.shift();

                                    setTimeout(() => {
                                        this.directions.shift();
                                    }, 400);
                                }, 2500);
                            }, 1000);
                        }, 1400);
                    }, 3500);
                }, 1200);
            }, 3000);
        },
        reverseTimer() {
            setTimeout(() => {
                this.directions.shift();
                
                setTimeout(() => {
                    this.directions.shift();
                    
                    setTimeout(() => {
                        this.directions.shift();
                        
                        setTimeout(() => {
                            this.directions.shift();
                            
                            setTimeout(() => {
                                this.directions.shift();
                                
                                setTimeout(() => {
                                    this.directions.shift();

                                    setTimeout(() => {
                                        this.directions.shift();
                                    }, 1200);
                                }, 3500);
                            }, 1400);
                        }, 1000);
                    }, 2300);
                }, 400);
            }, 3200);
        }
    },
    mounted() {
        if(this.isDropoff) {
            this.reverseTimer();
        } else {
            this.startTimer();
        }
    }
}
</script>

<style lang="scss" scoped>
    .directions {
        display: flex;
        justify-content: space-between;
        align-items: flex-start;
        height: 4.2rem;
        width: 100%;
        overflow-y: hidden;
        background: #ffffff;
        padding: .7rem;
        box-shadow: 0 2px 4px rgba(0, 0, 0, .25);

        ul {
            list-style-type: none;
        }
        
        /* Directions text and animation */
        .dir-list-item {
            color: rgba(0, 0, 0, 0);
            font-weight: 500;
            font-size: 1rem;
            transition: all .8s;
        }
        &-directions > :first-child {
            font-size: 1.25rem;
            font-weight: 700;
            color: #000000;
            margin-bottom: .3rem;
            transition: all .2s;
        }
        &-directions > :nth-child(2) {
            color: rgba(0, 0, 0, .5);
            transition: all .8s;
        }
        .dir-list-leave-active {
            position: absolute;
        }
        .dir-list-enter, .dir-list-leave-to {
            opacity: 0;
            transform: translateX(-.5rem);
        }
        
        /* Directions icon and animation */
        .dir-ico-list-item {
            opacity: 0;
            transition: all .2s;
        }
        &-icon {
            max-height: 2.5rem;
        }
        &-icons > :first-child {
            opacity: 1;
        }
        .dir-ico-list-leave-active {
            position: absolute;
        }
        .dir-ico-list-enter, .dir-ico-list-leave-to {
            opacity: 0;
            transform: translateY(-.5rem);
        }
    } 
</style>
<template>
    <div class="directions">
        <h2 class="heading-small">directions</h2>
        <transition-group name="dir-list" class="directions-directions" tag="ul">
            <li 
                v-for="direction in directions" 
                :key="direction.id"
                class="dir-list-item directions-card">
                    <p>{{ direction.direction }}</p>
                    <img class="directions-icon" :src="require(`../../assets/images/${direction.ico}`)" alt="">
            </li>
        </transition-group>  

        <div class="directions-info">
            <h3 class="sub-heading">time left</h3>
            <h3 class="sub-heading">distance left</h3>
            <h3 class="sub-heading">est. arrival</h3>
            <p>15 min</p>
            <p>7.3 km</p>
            <p>12:57</p>
        </div>      
    </div>
</template>

<script>
export default {
    name: 'directionsBoxDesktop',
        data() {
        return {
            directions: [
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
            ]
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
        }
    },
    mounted() {
        this.startTimer();
    }
}
</script>

<style lang="scss" scoped>
    .directions {
        width: 100%;

        .heading-small {
            @include headingSmall();
        }
        ul {
            list-style-type: none;
            height: 15rem;
            overflow: hidden;
        }
        
        /* Directions text and animation */
        .dir-list-item {
            height: 4.2rem;
            width: 26vw;
            background: #ffffff;
            opacity: .15;
            display: flex;
            justify-content: space-between;
            align-items: center;
            margin-bottom: 1rem;
            padding: .7rem;
            box-shadow: 0 2px 4px rgba(0, 0, 0, .25);
            font-weight: 500;
            font-size: 1rem;
            transition: transform .4s ease-out, opacity .2s;

            .directions-icon {
                max-height: 2.5rem;
            }
        }
        &-directions > :first-child {
            opacity: 1;
        }
        &-directions > :nth-child(2) {
            opacity: .5;
        }
        &-directions > :nth-child(3) {
            opacity: .25;
        }
        .dir-list-leave-active {
            position: absolute;
        }
        .dir-list-enter, .dir-list-leave-to {
            transform: translateX(-32vw);
        }        
        
        &-info {
            display: grid;
            grid-template-columns: repeat(3, 1fr);
            column-gap: .5rem;
            border-top: 1px solid $secondary;
            border-bottom: 1px solid $secondary;
            padding: .5rem;
            margin-bottom: 2rem;

            .sub-heading {
                @include subHeading();
            }
        }
    } 
</style>
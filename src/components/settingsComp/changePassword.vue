<template>
    <div class="change-password">
        <h1>Change password</h1>
        <label for="password">Current password</label>
        <primaryInput id="currentPassword" :placeholder="'Current password'" />
        <label for="newPassword">New password</label>
        <primaryInput id="newPassword" :placeholder="'New password'" />
        <primaryButton :text="'save'" :color="'green'" />
    </div>
</template>

<script>
import primaryInput from '../globalComp/primaryInput';
import primaryButton from '../globalComp/primaryButton';
export default {
    name: 'changePassword',
    components: {
        primaryInput,
        primaryButton
    }
}
</script>

<style lang="scss" scoped>
    .change-password {
        display: flex;
        flex-direction: column;
        align-items: center;

        h1 {
            display: none;
        }
        label {
            font-size: .875rem;
            font-weight: 900;
            margin-bottom: .5rem;
            text-transform: uppercase;
        }
        #currentPassword, #newPassword {
            margin-bottom: 2rem;
        }
    }
    
    @media only screen and (min-width: 768px) {
        .change-password h1 {
            display: block;
            @include headingLarge();
            margin-bottom: 2rem;
        }
    }
</style>
<script>
document.addEventListener('DOMContentLoaded', function() {
    const otherRadio = document.getElementById('gender-other');
    const otherInput = document.getElementById('other-gender');

    otherRadio.addEventListener('change', function() {
        if (this.checked) {
            otherInput.style.display = 'block';
        } else {
            otherInput.style.display = 'none';
        }
    });

    document.querySelectorAll('input[name="gender"]').forEach(radio => {
        if (radio.value !== 'other') {
            radio.addEventListener('change', function() {
                otherInput.style.display = 'none';
                otherInput.value = '';
            });
        }
    });
});
</script>

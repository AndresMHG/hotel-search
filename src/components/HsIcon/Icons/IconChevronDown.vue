<template>
	<svg 
		viewBox="0 0 19 3" 
		fill="none" 
		xmlns="http://www.w3.org/2000/svg"
		:width="width"
		:height="height"
		:color="color"
		>
		<path d="M6.46875 7.53125L0.46875 1.53125C0.15625 1.25 0.15625 0.78125 0.46875 0.46875C0.75 0.1875 1.21875 0.1875 1.53125 0.46875L7 5.96875L12.4688 0.5C12.75 0.1875 13.2188 0.1875 13.5312 0.5C13.8125 0.78125 13.8125 1.25 13.5312 1.53125L7.5 7.53125C7.21875 7.84375 6.75 7.84375 6.46875 7.53125Z" :fill="color"/>
	</svg>
</template>
<script>
export default {
	name: 'icon-chevron-down',
	props: {
		width: {
			type: Number,
			required: true 
		},

		height: {
			type: Number,
			required: true
		},

		color: {
			type: String,
			required: true
		}
	}
}
</script>
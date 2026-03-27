import { ref } from 'vue'

const isLeadModalOpen = ref(false)
const isPhoneModalOpen = ref(false)
const isComingSoonOpen = ref(false)

export const useUiManager = () => {
  const openLeadModal = () => {
    isLeadModalOpen.value = true
  }

  const closeLeadModal = () => {
    isLeadModalOpen.value = false
  }

  const openPhoneModal = () => {
    isPhoneModalOpen.value = true
  }

  const closePhoneModal = () => {
    isPhoneModalOpen.value = false
  }

  const showComingSoon = () => {
    isComingSoonOpen.value = true
    setTimeout(() => {
      isComingSoonOpen.value = false
    }, 3000)
  }

  return {
    isLeadModalOpen,
    openLeadModal,
    closeLeadModal,
    isPhoneModalOpen,
    openPhoneModal,
    closePhoneModal,
    isComingSoonOpen,
    showComingSoon
  }
}

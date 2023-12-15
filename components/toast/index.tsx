'use client'
import { ToastContainer, toast } from 'react-toastify'

interface ToastProps {
  message: string
  type: 'success' | 'error'
}
export default function ToasT({ message }: ToastProps) {
  toast(message)
  return <ToastContainer theme="dark" />
}

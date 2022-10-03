import { FunctionComponent, useState } from 'react'
import { useTranslation } from 'react-i18next'
import { HorseRaceModal } from '../components/HorseRaceModal'

export type ActionModalProps = {}

export const ActionModal: FunctionComponent<ActionModalProps> = ({}) => {
  const [showModal, setShowModal] = useState(false)

  const { t } = useTranslation()

  return (
    <HorseRaceModal visible={showModal} onClose={() => setShowModal(false)}>
      {}
    </HorseRaceModal>
  )
}

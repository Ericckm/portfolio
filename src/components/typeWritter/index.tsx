import Typewriter from 'typewriter-effect'

export const TypeWritter = () => {
  return (
    <Typewriter
      options={{
        strings: [' Software Developer', ' Content Creator'],
        autoStart: true,
        loop: true,
        deleteSpeed: 120
      }}
    />
  )
}

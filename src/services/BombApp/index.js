import moment from "moment";
import Exploded from "../../pages/Exploded";
import { Vibration } from "react-native";

export default BombService = {
  getDiffTime: ({ hours, minutes, seconds }) => {
    const explodeTime = moment();
    let secondsMoment = seconds.length >= 1 ? seconds : 0;
    let minutesMoment = minutes.length >= 1 ? minutes : 0;
    let hoursMoment = hours.length >= 1 ? hours : 0;

    explodeTime
      .add(secondsMoment, "seconds")
      .add(minutesMoment, "minutes")
      .add(hoursMoment, "hours");

    const currentTime = moment();

    return explodeTime.unix() - currentTime.unix();
  },

  startContDown: ({
    setSeconds,
    setMinutes,
    setHours,
    setStarted,
    diffTime,
    setIntervalId,
    intervalId,
    navigation,
  }) => {
    let duration = moment.duration(diffTime * 1000); // Converte o tempo restante para uma duração no moment

    const interval = 1000; // Intervalo de 1 segundo

    if (diffTime <= 0) return; // Verifica se o tempo restante é maior que 0

    const id = setInterval(() => {
      duration = moment.duration(duration.asMilliseconds() - interval); // Subtrai 1 segundo do tempo restante

      // Acessa horas, minutos e segundos a partir do objeto duration
      const hoursDigits = duration.hours().toString().padStart(2, "0");
      const minutesDigits = duration.minutes().toString().padStart(2, "0");
      const secondsDigits = duration.seconds().toString().padStart(2, "0");

      // Verifica se o tempo acabou
      const timeEnded =
        hoursDigits === "00" &&
        minutesDigits === "00" &&
        secondsDigits === "00";

      if (timeEnded) {
        clearInterval(intervalId); // Para o intervalo se o tempo acabou
        setStarted(false); // Atualiza o estado para indicar que o timer parou
        navigation.navigate(Exploded); // Redireciona para a página "Exploded"
      }

      // Atualiza os estados das horas, minutos e segundos na interface
      setHours(hoursDigits);
      setMinutes(minutesDigits);
      setSeconds(secondsDigits);
    }, interval);

    setIntervalId(id); // Salva o ID do intervalo para poder ser limpo posteriormente

    return null;
  },

  bombStartGame: ({ setStarted, hours, minutes, seconds }) => {
    if (hours.length > 0 || minutes.length > 0 || seconds.length > 0) {
      setStarted(true);
    }
  },

  disarmBomb: ({ setStarted, answer, navigation, pin, setPin, intervalId }) => {
    if (pin.join("") === answer) {
      clearInterval(intervalId);
      setStarted(false);
      navigation.navigate("Disarmed");

      return;
    }

    setPin(["", "", ""]);

    Vibration.vibrate(2000);

    return;
  },

  giveUpGame: ({ intervalId, navigation }) => {
    clearInterval(intervalId);
    navigation.navigate("Exploded");
  },

  bombActivationTogether: ({
    question,
    pin,
    hours,
    minutes,
    seconds,
    setMessage,
    setStarted,
    setPin,
    handleStartBomb,
    setAnswer,
  }) => {
    if (question.length < 1) {
      setMessage("Você precisa dar uma dica!");
      return;
    }

    if (pin.join("").length < 3) {
      setMessage("Senha invalida, complete ela!");
      return;
    }

    let timeIsSet = false;

    if (hours.length > 0 || minutes.length > 0 || seconds.length > 0) {
      setStarted(true);
      timeIsSet = true;
      setMessage("");
      handleStartBomb();
      setAnswer(pin.join(""));
      setPin(["", "", ""]);
    }

    if (!timeIsSet) {
      setMessage("Timer invalido, coloque um tempo!");
      return;
    }
  },

  bombDisarmTogether: ({
    pin,
    answer,
    setStarted,
    intervalId,
    setPin,
    setAnswer,
    navigation,
  }) => {
    if (pin.join("") === answer) {
      clearInterval(intervalId);
      setStarted(false);
      navigation.navigate("Disarmed");
      setPin(["", "", ""]);
      setAnswer("");

      return;
    }

    setPin(["", "", ""]);

    Vibration.vibrate(2000);

    return;
  },
};

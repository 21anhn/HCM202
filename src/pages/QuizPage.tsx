import React, { useState } from "react";
import { motion } from "framer-motion";

interface QuizQuestion {
  questionNumber: number;
  question: string;
  imageUrl?: string | null;
  answerOptions: {
    text: string;
    rationale: string;
    isCorrect: boolean;
  }[];
  hint: string;
}

const questions: QuizQuestion[] = [
  {
    questionNumber: 1,
    question: "Dân chủ xã hội chủ nghĩa là nền dân chủ như thế nào?",
    imageUrl: null,
    answerOptions: [
      {
        text: "Nền dân chủ tuyệt đối, không có giới hạn nào",
        rationale:
          "Không có nền dân chủ nào là tuyệt đối; mọi nền dân chủ đều cần có pháp luật để duy trì trật tự và công bằng.",
        isCorrect: false,
      },
      {
        text: "Nền dân chủ cho mọi giai cấp",
        rationale:
          "Dân chủ xã hội chủ nghĩa được thực hiện để phục vụ lợi ích của đa số quần chúng lao động, không phải cho mọi giai cấp.",
        isCorrect: false,
      },
      {
        text: "Nền dân chủ rộng rãi cho quần chúng lao động, do nhân dân làm chủ",
        rationale:
          "Đây là bản chất của dân chủ xã hội chủ nghĩa, nơi quyền lực thực sự thuộc về nhân dân, phục vụ lợi ích của họ.",
        isCorrect: true,
      },
      {
        text: "Nền dân chủ chỉ dành cho những người có quyền lực",
        rationale:
          "Nền dân chủ chỉ dành cho một nhóm nhỏ người có quyền lực là đặc điểm của nền dân chủ tư sản, không phải dân chủ xã hội chủ nghĩa.",
        isCorrect: false,
      },
    ],
    hint: "Hãy nghĩ về bản chất 'vì nhân dân' của nền dân chủ này.",
  },
  {
    questionNumber: 2,
    question: "Mục tiêu cuối cùng của dân chủ xã hội chủ nghĩa là gì?",
    imageUrl: null,
    answerOptions: [
      {
        text: "Tập trung quyền lực vào tay một nhóm nhỏ",
        rationale:
          "Mục tiêu này đi ngược lại nguyên lý của dân chủ xã hội chủ nghĩa là quyền lực thuộc về nhân dân.",
        isCorrect: false,
      },
      {
        text: "Phân chia quyền lực giữa các giai cấp",
        rationale:
          "Dân chủ xã hội chủ nghĩa không phân chia quyền lực, mà là đảm bảo quyền lực thuộc về nhân dân.",
        isCorrect: false,
      },
      {
        text: "Đưa nhân dân lên vị trí làm chủ xã hội, làm chủ chính bản thân mình",
        rationale:
          "Đây là mục tiêu cao nhất của dân chủ xã hội chủ nghĩa, nhằm giải phóng và phát huy tiềm năng của con người.",
        isCorrect: true,
      },
      {
        text: "Chỉ bảo vệ quyền lợi của một bộ phận dân cư",
        rationale:
          "Dân chủ xã hội chủ nghĩa hướng tới bảo vệ quyền lợi của đại đa số nhân dân, không phải chỉ một bộ phận nhỏ.",
        isCorrect: false,
      },
    ],
    hint: "Mục tiêu này liên quan đến việc trao quyền và giải phóng con người.",
  },
  {
    questionNumber: 3,
    question: "Đặc điểm cơ bản của Nhà nước xã hội chủ nghĩa là gì?",
    imageUrl: null,
    answerOptions: [
      {
        text: "Nhà nước do một cá nhân lãnh đạo tuyệt đối",
        rationale:
          "Nhà nước xã hội chủ nghĩa hoạt động dựa trên nguyên tắc tập thể lãnh đạo, không phải cá nhân độc đoán.",
        isCorrect: false,
      },
      {
        text: "Nhà nước bảo vệ lợi ích của giai cấp bóc lột",
        rationale:
          "Nhà nước xã hội chủ nghĩa được thành lập để bảo vệ lợi ích của nhân dân lao động, chống lại sự bóc lột.",
        isCorrect: false,
      },
      {
        text: "Nhà nước mang bản chất giai cấp công nhân",
        rationale:
          "Nhà nước xã hội chủ nghĩa được thành lập và lãnh đạo bởi giai cấp công nhân, đại diện cho lợi ích của đa số nhân dân lao động.",
        isCorrect: true,
      },
      {
        text: "Nhà nước không có sự phân công, phối hợp quyền lực",
        rationale:
          "Nhà nước xã hội chủ nghĩa có sự phân công rõ ràng về quyền lực để đảm bảo hoạt động hiệu quả.",
        isCorrect: false,
      },
    ],
    hint: "Đặc điểm này liên quan đến giai cấp lãnh đạo và mục tiêu của nhà nước.",
  },
  {
    questionNumber: 4,
    question:
      "Nhà nước xã hội chủ nghĩa được tổ chức và hoạt động dựa trên nguyên tắc nào?",
    imageUrl: null,
    answerOptions: [
      {
        text: "Nguyên tắc quyền lực tập trung vào một nhóm thiểu số",
        rationale:
          "Nguyên tắc này trái ngược với bản chất của nhà nước xã hội chủ nghĩa, nơi quyền lực thuộc về nhân dân.",
        isCorrect: false,
      },
      {
        text: "Nguyên tắc quyền lực nhà nước là thống nhất, có sự phân công, phối hợp và kiểm soát",
        rationale:
          "Đây là nguyên tắc cơ bản trong tổ chức và hoạt động của Nhà nước pháp quyền xã hội chủ nghĩa, đảm bảo hiệu lực, hiệu quả của quyền lực nhà nước.",
        isCorrect: true,
      },
      {
        text: "Nguyên tắc quyền lực nhà nước bị phân tán, không thống nhất",
        rationale:
          "Sự phân tán quyền lực có thể dẫn đến sự hỗn loạn và mất kiểm soát, không phù hợp với mục tiêu của nhà nước xã hội chủ nghĩa.",
        isCorrect: false,
      },
      {
        text: "Nguyên tắc quyền lực nhà nước thuộc về một cá nhân",
        rationale:
          "Nguyên tắc này là độc đoán và chuyên chế, không phù hợp với bản chất dân chủ của nhà nước xã hội chủ nghĩa.",
        isCorrect: false,
      },
    ],
    hint: "Nguyên tắc này nhằm đảm bảo sự thống nhất và kiểm soát quyền lực.",
  },
  {
    questionNumber: 5,
    question: "Nhà nước pháp quyền xã hội chủ nghĩa có đặc trưng gì?",
    imageUrl: null,
    answerOptions: [
      {
        text: "Quản lý xã hội bằng mệnh lệnh và sự độc đoán",
        rationale:
          "Việc quản lý xã hội bằng mệnh lệnh và sự độc đoán không phải là đặc trưng của nhà nước pháp quyền, vốn nhấn mạnh việc quản lý bằng pháp luật.",
        isCorrect: false,
      },
      {
        text: "Hiến pháp và pháp luật giữ vị trí tối thượng trong điều chỉnh các quan hệ xã hội",
        rationale:
          "Đây là đặc trưng cơ bản của nhà nước pháp quyền, nơi luật pháp là công cụ quản lý chủ yếu và cao nhất.",
        isCorrect: true,
      },
      {
        text: "Nhà nước đứng trên và ngoài pháp luật",
        rationale:
          "Trong nhà nước pháp quyền, bản thân nhà nước cũng phải tuân thủ pháp luật, không thể đứng trên hoặc ngoài pháp luật.",
        isCorrect: false,
      },
      {
        text: "Chỉ bảo vệ quyền lợi cho giai cấp thống trị",
        rationale:
          "Nhà nước pháp quyền xã hội chủ nghĩa bảo vệ quyền con người, quyền công dân của tất cả mọi người, không chỉ riêng giai cấp thống trị.",
        isCorrect: false,
      },
    ],
    hint: "Hãy nghĩ về vai trò của luật pháp trong nhà nước pháp quyền.",
  },
  {
    questionNumber: 6,
    question:
      "Vai trò của Đảng Cộng sản Việt Nam trong Nhà nước pháp quyền xã hội chủ nghĩa là gì?",
    imageUrl: null,
    answerOptions: [
      {
        text: "Đảng trực tiếp quản lý và điều hành mọi hoạt động của nhà nước",
        rationale:
          "Đảng lãnh đạo nhà nước, nhưng không trực tiếp điều hành, việc điều hành là nhiệm vụ của các cơ quan nhà nước.",
        isCorrect: false,
      },
      {
        text: "Đảng là người đứng trên pháp luật, không chịu sự ràng buộc",
        rationale:
          "Trong Nhà nước pháp quyền xã hội chủ nghĩa, Đảng lãnh đạo, đồng thời hoạt động trong khuôn khổ Hiến pháp và pháp luật.",
        isCorrect: false,
      },
      {
        text: "Đảng lãnh đạo nhà nước và xã hội, không phải là cơ quan quyền lực nhà nước",
        rationale:
          "Đây là vai trò đúng của Đảng Cộng sản Việt Nam theo Hiến pháp, Đảng lãnh đạo, còn nhà nước thực hiện quyền lực.",
        isCorrect: true,
      },
      {
        text: "Đảng chỉ có vai trò tư vấn, không có quyền quyết định",
        rationale:
          "Đảng giữ vai trò lãnh đạo, có quyền quyết định những vấn đề trọng đại của đất nước, không chỉ là tư vấn.",
        isCorrect: false,
      },
    ],
    hint: "Vai trò của Đảng được quy định trong Hiến pháp của Việt Nam.",
  },
  {
    questionNumber: 7,
    question:
      "Dân chủ trong lĩnh vực chính trị ở Việt Nam được thể hiện như thế nào?",
    imageUrl: null,
    answerOptions: [
      {
        text: "Chỉ có một vài người dân được tham gia bầu cử",
        rationale:
          "Việc bầu cử là quyền của tất cả công dân, không giới hạn ở một vài người.",
        isCorrect: false,
      },
      {
        text: "Quyền lực nhà nước chỉ thuộc về các quan chức",
        rationale:
          "Hiến pháp Việt Nam quy định quyền lực nhà nước thuộc về nhân dân.",
        isCorrect: false,
      },
      {
        text: "Quyền bầu cử và ứng cử của công dân được đảm bảo",
        rationale:
          "Đây là một trong những biểu hiện quan trọng nhất của dân chủ chính trị, đảm bảo quyền làm chủ của nhân dân.",
        isCorrect: true,
      },
      {
        text: "Không có quyền tự do ngôn luận và báo chí",
        rationale:
          "Hiến pháp Việt Nam quy định công dân có quyền tự do ngôn luận và báo chí.",
        isCorrect: false,
      },
    ],
    hint: "Hãy nghĩ về những quyền cơ bản của công dân trong hệ thống chính trị.",
  },
  {
    questionNumber: 8,
    question:
      "Trong Nhà nước pháp quyền xã hội chủ nghĩa Việt Nam, cơ quan nào thực hiện quyền lập pháp?",
    imageUrl: null,
    answerOptions: [
      {
        text: "Chính phủ",
        rationale:
          "Chính phủ là cơ quan thực hiện quyền hành pháp, quản lý điều hành đất nước.",
        isCorrect: false,
      },
      {
        text: "Tòa án Nhân dân Tối cao",
        rationale:
          "Tòa án Nhân dân Tối cao là cơ quan thực hiện quyền tư pháp, xét xử.",
        isCorrect: false,
      },
      {
        text: "Quốc hội",
        rationale:
          "Quốc hội là cơ quan duy nhất thực hiện quyền lập pháp, ban hành luật và Hiến pháp.",
        isCorrect: true,
      },
      {
        text: "Ủy ban nhân dân các cấp",
        rationale:
          "Ủy ban nhân dân các cấp là cơ quan hành chính nhà nước ở địa phương.",
        isCorrect: false,
      },
    ],
    hint: "Cơ quan này đại diện cho ý chí và nguyện vọng của nhân dân trên toàn quốc.",
  },
  {
    questionNumber: 9,
    question:
      "Nhà nước pháp quyền xã hội chủ nghĩa Việt Nam bảo đảm điều gì cho người dân?",
    imageUrl: null,
    answerOptions: [
      {
        text: "Bảo đảm quyền lợi cho một nhóm đặc quyền",
        rationale:
          "Nhà nước xã hội chủ nghĩa hướng đến bảo vệ quyền lợi của tất cả nhân dân, không chỉ một nhóm đặc quyền.",
        isCorrect: false,
      },
      {
        text: "Bảo đảm quyền con người, quyền công dân trên cơ sở Hiến pháp và pháp luật",
        rationale:
          "Đây là nguyên tắc cơ bản và là mục tiêu quan trọng của Nhà nước pháp quyền xã hội chủ nghĩa Việt Nam.",
        isCorrect: true,
      },
      {
        text: "Không cần tôn trọng quyền lợi của người dân",
        rationale:
          "Nguyên tắc này hoàn toàn trái ngược với bản chất của Nhà nước pháp quyền xã hội chủ nghĩa.",
        isCorrect: false,
      },
      {
        text: "Chỉ bảo đảm quyền lợi khi có lợi cho nhà nước",
        rationale:
          "Nhà nước pháp quyền xã hội chủ nghĩa phải luôn bảo vệ quyền lợi của người dân, bất kể có lợi cho nhà nước hay không.",
        isCorrect: false,
      },
    ],
    hint: "Hãy nghĩ về những gì mà nhà nước phải cung cấp và bảo vệ cho mọi công dân.",
  },
  {
    questionNumber: 10,
    question:
      "Mối quan hệ giữa dân chủ xã hội chủ nghĩa và Nhà nước xã hội chủ nghĩa là gì?",
    imageUrl: null,
    answerOptions: [
      {
        text: "Dân chủ xã hội chủ nghĩa không liên quan đến Nhà nước xã hội chủ nghĩa",
        rationale:
          "Mối quan hệ giữa hai yếu tố này rất chặt chẽ, không thể tách rời.",
        isCorrect: false,
      },
      {
        text: "Nhà nước là công cụ để thực thi và phát huy dân chủ xã hội chủ nghĩa",
        rationale:
          "Đây là mối quan hệ đúng, Nhà nước là phương tiện để hiện thực hóa các quyền dân chủ của nhân dân.",
        isCorrect: true,
      },
      {
        text: "Dân chủ làm suy yếu quyền lực của nhà nước",
        rationale:
          "Ngược lại, dân chủ lành mạnh sẽ giúp củng cố quyền lực của nhà nước, làm cho nhà nước hoạt động hiệu quả hơn.",
        isCorrect: false,
      },
      {
        text: "Nhà nước là mục đích cuối cùng của dân chủ",
        rationale:
          "Nhà nước chỉ là phương tiện để đạt được dân chủ, dân chủ mới là mục đích cuối cùng.",
        isCorrect: false,
      },
    ],
    hint: "Một bên là mục tiêu, một bên là phương tiện để đạt được mục tiêu đó.",
  },
  {
    questionNumber: 11,
    question:
      "Theo giáo trình, một trong những nguyên tắc cốt lõi của việc xây dựng Nhà nước pháp quyền xã hội chủ nghĩa Việt Nam là gì?",
    imageUrl: null,
    answerOptions: [
      {
        text: "Độc quyền pháp luật",
        rationale:
          "Nguyên tắc này đi ngược lại với tinh thần của nhà nước pháp quyền, nơi pháp luật áp dụng cho tất cả mọi người.",
        isCorrect: false,
      },
      {
        text: "Phân công, phối hợp và kiểm soát quyền lực nhà nước",
        rationale:
          "Nguyên tắc này giúp đảm bảo quyền lực nhà nước không bị lạm dụng, đồng thời tăng cường hiệu lực, hiệu quả hoạt động của bộ máy nhà nước.",
        isCorrect: true,
      },
      {
        text: "Quyền lực tập trung vào một cơ quan duy nhất",
        rationale:
          "Việc tập trung toàn bộ quyền lực vào một cơ quan có thể dẫn đến sự độc đoán, chuyên quyền, không phù hợp với bản chất dân chủ.",
        isCorrect: false,
      },
      {
        text: "Không cần phân chia quyền lực",
        rationale:
          "Nguyên tắc này đi ngược lại với đặc trưng của nhà nước pháp quyền, vốn nhấn mạnh sự phân chia quyền lực để kiểm soát và cân bằng.",
        isCorrect: false,
      },
    ],
    hint: "Nguyên tắc này liên quan đến sự phân bổ quyền lực trong bộ máy nhà nước.",
  },
  {
    questionNumber: 12,
    question:
      "Dân chủ xã hội chủ nghĩa có vai trò gì trong sự phát triển xã hội?",
    imageUrl: null,
    answerOptions: [
      {
        text: "Làm chậm quá trình phát triển kinh tế",
        rationale:
          "Ngược lại, dân chủ xã hội chủ nghĩa thúc đẩy sự phát triển kinh tế bằng cách phát huy quyền làm chủ và sáng tạo của người dân.",
        isCorrect: false,
      },
      {
        text: "Chỉ có lợi cho một số ít người trong xã hội",
        rationale:
          "Dân chủ xã hội chủ nghĩa hướng đến lợi ích chung, mang lại công bằng và tiến bộ cho toàn xã hội.",
        isCorrect: false,
      },
      {
        text: "Thúc đẩy sự phát triển công bằng, tiến bộ xã hội",
        rationale:
          "Đây là vai trò quan trọng của dân chủ xã hội chủ nghĩa, giúp xã hội phát triển hài hòa, bền vững.",
        isCorrect: true,
      },
      {
        text: "Tạo ra sự phân hóa giàu nghèo sâu sắc hơn",
        rationale:
          "Dân chủ xã hội chủ nghĩa hướng đến xóa bỏ sự phân hóa, xây dựng một xã hội công bằng.",
        isCorrect: false,
      },
    ],
    hint: "Vai trò này thể hiện ở việc đảm bảo lợi ích chung cho toàn xã hội.",
  },
  {
    questionNumber: 13,
    question:
      "Nhân tố nào đóng vai trò quyết định trong việc xây dựng và hoàn thiện Nhà nước pháp quyền xã hội chủ nghĩa ở Việt Nam?",
    imageUrl: null,
    answerOptions: [
      {
        text: "Sự lãnh đạo của một cá nhân tài giỏi",
        rationale:
          "Sự lãnh đạo tập thể và sự tham gia của nhân dân là yếu tố quyết định, không phải chỉ một cá nhân.",
        isCorrect: false,
      },
      {
        text: "Sự lãnh đạo của Đảng Cộng sản Việt Nam",
        rationale:
          "Đảng Cộng sản Việt Nam là nhân tố chính trị duy nhất lãnh đạo quá trình xây dựng và hoàn thiện Nhà nước pháp quyền xã hội chủ nghĩa ở Việt Nam.",
        isCorrect: true,
      },
      {
        text: "Sự can thiệp của các quốc gia khác",
        rationale:
          "Việc xây dựng nhà nước là công việc nội bộ của mỗi quốc gia, không phụ thuộc vào sự can thiệp từ bên ngoài.",
        isCorrect: false,
      },
      {
        text: "Sự độc quyền về kinh tế",
        rationale:
          "Yếu tố quyết định là chính trị, là sự lãnh đạo của Đảng, không phải độc quyền kinh tế.",
        isCorrect: false,
      },
    ],
    hint: "Nhân tố này là lực lượng chính trị duy nhất được Hiến pháp công nhận.",
  },
  {
    questionNumber: 14,
    question:
      "Biểu hiện nào dưới đây cho thấy bản chất dân chủ của Nhà nước pháp quyền xã hội chủ nghĩa Việt Nam?",
    imageUrl: null,
    answerOptions: [
      {
        text: "Quyền lực nhà nước được chia đều cho mọi cá nhân",
        rationale:
          "Quyền lực nhà nước là thống nhất, không chia đều cho mọi cá nhân mà được phân công cho các cơ quan khác nhau.",
        isCorrect: false,
      },
      {
        text: "Quyền lực nhà nước thuộc về nhân dân",
        rationale:
          "Đây là nguyên tắc cơ bản và là biểu hiện rõ nét nhất của bản chất dân chủ trong nhà nước pháp quyền xã hội chủ nghĩa.",
        isCorrect: true,
      },
      {
        text: "Quyền lực chỉ tập trung vào cơ quan lập pháp",
        rationale:
          "Quyền lực nhà nước có sự phân công, phối hợp giữa lập pháp, hành pháp và tư pháp.",
        isCorrect: false,
      },
      {
        text: "Nhà nước đứng trên và ngoài pháp luật",
        rationale:
          "Bản chất nhà nước pháp quyền là mọi cơ quan nhà nước đều phải tuân thủ pháp luật.",
        isCorrect: false,
      },
    ],
    hint: "Hãy nghĩ về ai là chủ thể của quyền lực nhà nước.",
  },
  {
    questionNumber: 15,
    question:
      "Nguyên tắc hoạt động nào của Nhà nước pháp quyền xã hội chủ nghĩa Việt Nam có ý nghĩa quan trọng trong phòng, chống tham nhũng, lãng phí?",
    imageUrl: null,
    answerOptions: [
      {
        text: "Nguyên tắc quyền lực tập trung",
        rationale:
          "Việc tập trung quyền lực dễ tạo điều kiện cho tham nhũng, lãng phí, không phải là nguyên tắc phòng, chống.",
        isCorrect: false,
      },
      {
        text: "Nguyên tắc không chịu sự giám sát",
        rationale:
          "Việc không có sự giám sát sẽ khiến tệ nạn tham nhũng, lãng phí gia tăng.",
        isCorrect: false,
      },
      {
        text: "Nguyên tắc phân công, phối hợp và kiểm soát quyền lực nhà nước",
        rationale:
          "Sự kiểm soát quyền lực là một trong những biện pháp hữu hiệu nhất để phòng, chống tham nhũng, lãng phí.",
        isCorrect: true,
      },
      {
        text: "Nguyên tắc chỉ quản lý bằng mệnh lệnh",
        rationale:
          "Quản lý bằng mệnh lệnh mà không có cơ chế kiểm soát sẽ dễ dẫn đến tiêu cực, tham nhũng.",
        isCorrect: false,
      },
    ],
    hint: "Nguyên tắc này liên quan đến sự cân bằng và giám sát các nhánh quyền lực của nhà nước.",
  },
];

const Quiz: React.FC = () => {
  const [current, setCurrent] = useState(0);
  const [selected, setSelected] = useState<null | number>(null);
  const [showFeedback, setShowFeedback] = useState(false);
  const [score, setScore] = useState(0);
  const [answers, setAnswers] = useState<(number | null)[]>(
    Array(questions.length).fill(null)
  );
  const [showHint, setShowHint] = useState(false);

  const handleAnswer = (idx: number) => {
    if (answers[current] !== null) return;
    setSelected(idx);
    setShowFeedback(true);
    setAnswers((prev) => {
      const arr = [...prev];
      arr[current] = idx;
      return arr;
    });
    if (questions[current].answerOptions[idx].isCorrect) setScore((s) => s + 1);
  };

  const handleNext = () => {
    setSelected(null);
    setShowFeedback(false);
    setShowHint(false);
    setCurrent((c) => Math.min(c + 1, questions.length));
  };

  const handlePrev = () => {
    setSelected(null);
    setShowFeedback(false);
    setShowHint(false);
    setCurrent((c) => Math.max(c - 1, 0));
  };

  const resetQuiz = () => {
    setCurrent(0);
    setScore(0);
    setSelected(null);
    setShowFeedback(false);
    setShowHint(false);
    setAnswers(Array(questions.length).fill(null));
  };

  const isAnswered = answers[current] !== null;
  const isCorrectAnswer =
    answers[current] !== null &&
    questions[current]?.answerOptions[answers[current] as number]?.isCorrect;

  const findCorrectAnswerIndex = (q: QuizQuestion) =>
    q.answerOptions.findIndex((opt) => opt.isCorrect);

  return (
    <div className="min-h-screen flex flex-col items-center justify-center bg-[#f4f7ff] py-10 px-2">
      <motion.div
        className="w-full max-w-2xl bg-white/90 rounded-2xl shadow-xl p-6 md:p-10"
        initial={{ opacity: 0, y: 40 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.7 }}
      >
        <h2 className="text-3xl md:text-4xl font-extrabold text-transparent bg-clip-text bg-gradient-to-r from-[#2a2e6e] via-[#6e7fdc] to-[#3a3f8f] mb-8 text-center drop-shadow">
          Quiz ôn tập lý thuyết
        </h2>
        {current < questions.length ? (
          <>
            <div className="text-lg font-medium mb-6 text-gray-800 text-center">
              Câu {current + 1}/{questions.length}:<br />
              <span className="font-semibold">
                {questions[current].question}
              </span>
            </div>
            <div className="flex flex-col gap-3 mb-6">
              {questions[current].answerOptions.map((opt, idx) => {
                const isSelected = selected === idx || answers[current] === idx;
                const isCorrect = opt.isCorrect;
                const showResult = showFeedback || isAnswered;
                let btnClass = "";
                if (showResult) {
                  if (isSelected && isCorrect)
                    btnClass = "bg-green-500 text-white border-green-600";
                  else if (isSelected && !isCorrect)
                    btnClass = "bg-red-500 text-white border-red-600";
                  else if (isCorrect)
                    btnClass = "bg-green-100 border-green-400 text-green-700";
                  else btnClass = "bg-blue-100 border-blue-300 text-blue-700";
                } else {
                  btnClass = isSelected
                    ? "bg-blue-200 border-blue-400 text-blue-900"
                    : "bg-blue-100 border-blue-300 text-blue-700 hover:bg-blue-200";
                }
                return (
                  <motion.button
                    key={idx}
                    whileTap={{ scale: 0.97 }}
                    className={`w-full px-4 py-3 rounded-lg text-lg font-medium border-2 shadow transition-all text-left ${btnClass}`}
                    disabled={showResult}
                    onClick={() => handleAnswer(idx)}
                  >
                    {String.fromCharCode(65 + idx)}. {opt.text}
                  </motion.button>
                );
              })}
            </div>
            {(showFeedback || isAnswered) && (
              <motion.div
                className={`text-center text-lg font-semibold mb-4 ${
                  isCorrectAnswer ? "text-green-600" : "text-red-600"
                }`}
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ duration: 0.4 }}
              >
                {isCorrectAnswer ? "Chính xác!" : "Chưa đúng!"}
                <div className="text-gray-700 text-base mt-2 font-normal">
                  <span className="font-medium">Giải thích: </span>
                  {isCorrectAnswer
                    ? questions[current].answerOptions[
                        answers[current] as number
                      ].rationale
                    : questions[current].answerOptions[
                        findCorrectAnswerIndex(questions[current])
                      ].rationale}
                </div>
              </motion.div>
            )}
            <div className="flex justify-between items-center mt-6">
              <button
                className="px-5 py-2 bg-gray-200 text-gray-700 rounded-lg hover:bg-gray-300 transition disabled:opacity-50"
                onClick={handlePrev}
                disabled={current === 0}
              >
                Câu trước
              </button>
              <button
                className="px-5 py-2 bg-yellow-400 text-yellow-900 rounded-lg hover:bg-yellow-500 transition disabled:opacity-50"
                onClick={() => setShowHint(!showHint)}
              >
                Gợi ý
              </button>
              <button
                className="px-5 py-2 bg-blue-500 text-white rounded-lg hover:bg-blue-600 transition disabled:opacity-50"
                onClick={handleNext}
                disabled={!isAnswered}
              >
                Câu tiếp
              </button>
            </div>
            <motion.div
              className="mt-4 p-4 text-center bg-yellow-50 text-yellow-800 border-l-4 border-yellow-400 rounded-lg"
              initial={{ opacity: 0, height: 0 }}
              animate={{
                opacity: showHint ? 1 : 0,
                height: showHint ? "auto" : 0,
              }}
              transition={{ duration: 0.3 }}
            >
              <div className="font-semibold mb-2">Gợi ý:</div>
              <div className="text-sm italic">{questions[current].hint}</div>
            </motion.div>
          </>
        ) : (
          <motion.div
            className="text-center"
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.5 }}
          >
            <div className="text-2xl font-bold text-blue-700 mb-2">
              Hoàn thành!
            </div>
            <div className="text-lg mb-4">
              Bạn đúng <span className="text-green-600 font-bold">{score}</span>
              /{questions.length} câu.
            </div>
            {answers.some(
              (ans, idx) =>
                idx < questions.length &&
                ans !== null &&
                !questions[idx]?.answerOptions[ans]?.isCorrect
            ) && (
              <div className="mt-6 text-left max-w-xl mx-auto">
                <div className="font-semibold text-red-600 mb-2">
                  Các câu bạn trả lời sai, hãy lưu ý:
                </div>
                <ul className="space-y-4">
                  {questions.map((q, idx) =>
                    answers[idx] !== null &&
                    !q.answerOptions[answers[idx] as number].isCorrect ? (
                      <li
                        key={idx}
                        className="bg-red-50 border-l-4 border-red-400 p-4 rounded"
                      >
                        <div className="font-medium text-gray-800 mb-1">
                          Câu {idx + 1}: {q.question}
                        </div>
                        <div className="text-gray-700 mb-1">
                          <span className="font-semibold">Đáp án đúng:</span>{" "}
                          {String.fromCharCode(65 + findCorrectAnswerIndex(q))}.{" "}
                          {q.answerOptions[findCorrectAnswerIndex(q)].text}
                        </div>
                        <div className="text-gray-600 text-sm italic">
                          {q.answerOptions[findCorrectAnswerIndex(q)].rationale}
                        </div>
                      </li>
                    ) : null
                  )}
                </ul>
              </div>
            )}
            <button
              className="mt-8 px-6 py-3 bg-blue-500 text-white rounded-lg hover:bg-blue-600 transition"
              onClick={resetQuiz}
            >
              Làm lại Quiz
            </button>
          </motion.div>
        )}
      </motion.div>
    </div>
  );
};

export default Quiz;

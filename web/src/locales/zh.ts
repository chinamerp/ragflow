export default {
  translation: {
    common: {
      delete: '删除',
      deleteModalTitle: '确定删除吗?',
      ok: '是',
      cancel: '否',
      total: '总共',
      rename: '重命名',
      name: '名称',
      save: '保存',
      namePlaceholder: '请输入名称',
      next: '下一步',
      create: '创建',
      edit: '编辑',
      upload: '上传',
      english: '英文',
      chinese: '简体中文',
      traditionalChinese: '繁体中文',
      language: '语言',
      languageMessage: '请输入语言',
      languagePlaceholder: '请选择语言',
      copy: '复制',
      copied: '复制成功',
      comingSoon: '即将推出',
      download: '下载',
      close: '关闭',
      preview: '预览',
      move: '移动',
      warn: '提醒',
      action: '操作',
      s: '秒',
      pleaseSelect: '请选择',
      pleaseInput: '请输入',
    },
    login: {
      login: '登录',
      signUp: '注册',
      loginDescription: '很高兴再次见到您！',
      registerDescription: '很高兴您加入！',
      emailLabel: '邮箱',
      emailPlaceholder: '请输入邮箱地址',
      passwordLabel: '密码',
      passwordPlaceholder: '请输入密码',
      rememberMe: '记住我',
      signInTip: '没有帐户？',
      signUpTip: '已经有帐户？',
      nicknameLabel: '名称',
      nicknamePlaceholder: '请输入名称',
      register: '创建账户',
      continue: '继续',
      title: '开始构建您的智能助手',
      description:
        '免费注册以探索顶级 RAG 技术。 创建知识库和人工智能来增强您的业务',
      review: '来自 500 多条评论',
    },
    header: {
      knowledgeBase: '知识库',
      chat: '聊天',
      register: '注册',
      signin: '登录',
      home: '首页',
      setting: '用户设置',
      logout: '登出',
      fileManager: '文件管理',
      flow: 'Agent',
      search: '搜索',
    },
    knowledgeList: {
      welcome: '欢迎回来',
      description: '今天我们要使用哪个知识库？',
      createKnowledgeBase: '创建知识库',
      name: '名称',
      namePlaceholder: '请输入名称',
      doc: '文档',
      searchKnowledgePlaceholder: '搜索',
    },
    knowledgeDetails: {
      dataset: '数据集',
      testing: '检索测试',
      configuration: '配置',
      files: '文件',
      name: '名称',
      namePlaceholder: '请输入名称',
      doc: '文档',
      datasetDescription: '😉 解析成功后才能问答哦。',
      addFile: '新增文件',
      searchFiles: '搜索文件',
      localFiles: '本地文件',
      emptyFiles: '新建空文件',
      webCrawl: '网页抓取',
      chunkNumber: '分块数',
      uploadDate: '上传日期',
      chunkMethod: '解析方法',
      enabled: '启用',
      disabled: '禁用',
      action: '动作',
      parsingStatus: '解析状态',
      processBeginAt: '流程开始于',
      processDuration: '过程持续时间',
      progressMsg: '进度消息',
      testingDescription: '最后一步！ 成功后，剩下的就交给Infiniflow AI吧。',
      similarityThreshold: '相似度阈值',
      similarityThresholdTip:
        '我们使用混合相似度得分来评估两行文本之间的距离。 它是加权关键词相似度和向量余弦相似度。 如果查询和块之间的相似度小于此阈值，则该块将被过滤掉。',
      vectorSimilarityWeight: '关键字相似度权重',
      vectorSimilarityWeightTip:
        '我们使用混合相似性评分来评估两行文本之间的距离。它是加权关键字相似性和矢量余弦相似性或rerank得分（0〜1）。两个权重的总和为1.0。',
      testText: '测试文本',
      testTextPlaceholder: '请输入您的问题！',
      testingLabel: '测试',
      similarity: '混合相似度',
      termSimilarity: '关键词相似度',
      vectorSimilarity: '向量相似度',
      hits: '命中数',
      view: '看法',
      filesSelected: '选定的文件',
      upload: '上传',
      run: '启动',
      runningStatus0: '未启动',
      runningStatus1: '解析中',
      runningStatus2: '取消',
      runningStatus3: '成功',
      runningStatus4: '失败',
      pageRanges: '页码范围',
      pageRangesTip:
        '页码范围：定义需要解析的页面范围。 不包含在这些范围内的页面将被忽略。',
      fromPlaceholder: '从',
      fromMessage: '缺少起始页码',
      toPlaceholder: '到',
      toMessage: '缺少结束页码（不包含）',
      layoutRecognize: '布局识别',
      layoutRecognizeTip:
        '使用视觉模型进行布局分析，以更好地识别文档结构，找到标题、文本块、图像和表格的位置。 如果没有此功能，则只能获取 PDF 的纯文本。',
      taskPageSize: '任务页面大小',
      taskPageSizeMessage: '请输入您的任务页面大小！',
      taskPageSizeTip: `如果使用布局识别，PDF 文件将被分成连续的组。 布局分析将在组之间并行执行，以提高处理速度。 “任务页面大小”决定组的大小。 页面大小越大，将页面之间的连续文本分割成不同块的机会就越低。`,
      addPage: '新增页面',
      greaterThan: '当前值必须大于起始值！',
      greaterThanPrevious: '当前值必须大于之前的值！',
      selectFiles: '选择文件',
      changeSpecificCategory: '更改特定类别',
      uploadTitle: '点击或拖拽文件至此区域即可上传',
      uploadDescription:
        '支持单次或批量上传。 严禁上传公司数据或其他违禁文件。',
      chunk: '解析块',
      bulk: '批量',
      cancel: '取消',
      rerankModel: 'Rerank模型',
      rerankPlaceholder: '请选择',
      rerankTip: `如果是空的。它使用查询和块的嵌入来构成矢量余弦相似性。否则，它使用rerank评分代替矢量余弦相似性。`,
      topK: 'Top-K',
      topKTip: `K块将被送入Rerank型号。`,
      delimiter: `分段标识符`,
      html4excel: '表格转HTML',
      html4excelTip: `Excel 是否将被解析为 HTML 表。如果为 FALSE，Excel 中的每一行都将形成一个块。`,
      autoKeywords: '自动关键词',
      autoKeywordsTip: `在查询此类关键词时，为每个块提取 N 个关键词以提高其排名得分。在“系统模型设置”中设置的 LLM 将消耗额外的 token。您可以在块列表中查看结果。`,
      autoQuestions: '自动问题',
      autoQuestionsTip: `在查询此类问题时，为每个块提取 N 个问题以提高其排名得分。在“系统模型设置”中设置的 LLM 将消耗额外的 token。您可以在块列表中查看结果。如果发生错误，此功能不会破坏整个分块过程，除了将空结果添加到原始块。`,
    },
    knowledgeConfiguration: {
      titleDescription: '在这里更新您的知识库详细信息，尤其是解析方法。',
      name: '知识库名称',
      photo: '知识库图片',
      description: '描述',
      language: '语言',
      languageMessage: '请输入语言',
      languagePlaceholder: '请输入语言',
      permissions: '权限',
      embeddingModel: '嵌入模型',
      chunkTokenNumber: '块Token数',
      chunkTokenNumberMessage: '块Token数是必填项',
      embeddingModelTip:
        '用于嵌入块的嵌入模型。 一旦知识库有了块，它就无法更改。 如果你想改变它，你需要删除所有的块。',
      permissionsTip: '如果权限是“团队”，则所有团队成员都可以操作知识库。',
      chunkTokenNumberTip: '它大致确定了一个块的Token数量。',
      chunkMethod: '解析方法',
      chunkMethodTip: '说明位于右侧。',
      upload: '上传',
      english: '英文',
      chinese: '中文',
      embeddingModelPlaceholder: '请选择嵌入模型',
      chunkMethodPlaceholder: '请选择分块方法',
      save: '保存',
      me: '只有我',
      team: '团队',
      cancel: '取消',
      methodTitle: '分块方法说明',
      methodExamples: '示例',
      methodExamplesDescription: '提出以下屏幕截图以促进理解。',
      dialogueExamplesTitle: '对话示例',
      methodEmpty: '这将显示知识库类别的可视化解释',
      book: `<p>支持的文件格式为<b>DOCX</b>、<b>PDF</b>、<b>TXT</b>。</p><p>
      由于一本书很长，并不是所有部分都有用，如果是 PDF，
      请为每本书设置<i>页面范围</i>，以消除负面影响并节省分析计算时间。</p>`,
      laws: `<p>支持的文件格式为<b>DOCX</b>、<b>PDF</b>、<b>TXT</b>。</p><p>
      法律文件有非常严格的书写格式。 我们使用文本特征来检测分割点。
      </p><p>
      chunk的粒度与'ARTICLE'一致，所有上层文本都会包含在chunk中。
      </p>`,
      manual: `<p>仅支持<b>PDF</b>。</p><p>
      我们假设手册具有分层部分结构。 我们使用最低的部分标题作为对文档进行切片的枢轴。
      因此，同一部分中的图和表不会被分割，并且块大小可能会很大。
      </p>`,
      naive: `<p>支持的文件格式为<b>DOCX、EXCEL、PPT、IMAGE、PDF、TXT、MD、JSON、EML、HTML</b>。</p>
      <p>此方法将简单的方法应用于块文件：</p>
      <p>
      <li>系统将使用视觉检测模型将连续文本分割成多个片段。</li>
      <li>接下来，这些连续的片段被合并成Token数不超过“Token数”的块。</li></p>`,
      paper: `<p>仅支持<b>PDF</b>文件。</p><p>
      如果我们的模型运行良好，论文将按其部分进行切片，例如<i>摘要、1.1、1.2</i>等。</p><p>
      这样做的好处是LLM可以更好的概括论文中相关章节的内容，
      产生更全面的答案，帮助读者更好地理解论文。
      缺点是它增加了 LLM 对话的背景并增加了计算成本，
      所以在对话过程中，你可以考虑减少‘<b>topN</b>’的设置。</p>`,
      presentation: `<p>支持的文件格式为<b>PDF</b>、<b>PPTX</b>。</p><p>
      每个页面都将被视为一个块。 并且每个页面的缩略图都会被存储。</p><p>
      <i>您上传的所有PPT文件都会使用此方法自动分块，无需为每个PPT文件进行设置。</i></p>`,
      qa: ` <p>
      此块方法支持<b> excel </b>和<b> csv/txt </b>文件格式。
    </p>
    <li>
      如果文件以<b> excel </b>格式，则应由两个列组成
      没有标题：一个提出问题，另一个用于答案，
      答案列之前的问题列。多张纸是
      只要列正确结构，就可以接受。
    </li>
    <li>
      如果文件以<b> csv/txt </b>格式为
      用作分开问题和答案的定界符。
    </li>
    <p>
      <i>
        未能遵循上述规则的文本行将被忽略，并且
        每个问答对将被认为是一个独特的部分。
      </i>
    </p>`,
      resume: `<p>支持的文件格式为<b>DOCX</b>、<b>PDF</b>、<b>TXT</b>。
      </p><p>
      简历有多种格式，就像一个人的个性一样，但我们经常必须将它们组织成结构化数据，以便于搜索。
      </p><p>
      我们不是将简历分块，而是将简历解析为结构化数据。 作为HR，你可以扔掉所有的简历，
      您只需与<i>'RAGFlow'</i>交谈即可列出所有符合资格的候选人。
      </p>
        `,
      table: `支持<p><b>EXCEL</b>和<b>CSV/TXT</b>格式文件。</p><p>
      以下是一些提示：
      <ul>
    <li>对于 csv 或 txt 文件，列之间的分隔符为 <em><b>TAB</b></em>。</li>
    <li>第一行必须是列标题。</li>
    <li>列标题必须是有意义的术语，以便我们的大语言模型能够理解。
    列举一些同义词时最好使用斜杠<i>'/'</i>来分隔，甚至更好
    使用方括号枚举值，例如 <i>'gender/sex(male,female)'</i>.<p>
    以下是标题的一些示例：<ol>
        <li>供应商/供货商<b>'TAB'</b>颜色（黄色、红色、棕色）<b>'TAB'</b>性别（男、女）<b>'TAB'</ b>尺码（M、L、XL、XXL）</li>
        <li>姓名/名字<b>'TAB'</b>电话/手机/微信<b>'TAB'</b>最高学历（高中，职高，硕士，本科，博士，初中，中技，中 专，专科，专升本，MPA，MBA，EMBA）</li>
        </ol>
        </p>
    </li>
    <li>表中的每一行都将被视为一个块。</li>
    </ul>`,
      picture: `
      <p>支持图像文件。 视频即将推出。</p><p>
      如果图片中有文字，则应用 OCR 提取文字作为其文字描述。
      </p><p>
      如果OCR提取的文本不够，可以使用视觉LLM来获取描述。
      </p>`,
      one: `
      <p>支持的文件格式为<b>DOCX、EXCEL、PDF、TXT</b>。
      </p><p>
      对于一个文档，它将被视为一个完整的块，根本不会被分割。
      </p><p>
      如果你要总结的东西需要一篇文章的全部上下文，并且所选LLM的上下文长度覆盖了文档长度，你可以尝试这种方法。
      </p>`,
      knowledgeGraph: `<p>支持的文件格式为<b>DOCX、EXCEL、PPT、IMAGE、PDF、TXT、MD、JSON、EML</b>

<p>文件分块后，使用分块提取整个文档的知识图谱和思维导图。此方法将简单的方法应用于分块文件：
连续的文本将被切成大约 512 个 token 数的块。</p>
<p>接下来，将分块传输到 LLM 以提取知识图谱和思维导图的节点和关系。</p>

注意您需要指定的条目类型。</p>`,
      useRaptor: '使用召回增强RAPTOR策略',
      useRaptorTip: '请参考 https://huggingface.co/papers/2401.18059',
      prompt: '提示词',
      promptMessage: '提示词是必填项',
      promptText: `请总结以下段落。 小心数字，不要编造。 段落如下：
      {cluster_content}
以上就是你需要总结的内容。`,
      maxToken: '最大token数',
      maxTokenMessage: '最大token数是必填项',
      threshold: '阈值',
      thresholdMessage: '阈值是必填项',
      maxCluster: '最大聚类数',
      maxClusterMessage: '最大聚类数是必填项',
      randomSeed: '随机种子',
      randomSeedMessage: '随机种子是必填项',
      promptTip: 'LLM提示用于总结。',
      maxTokenTip: '用于汇总的最大token数。',
      thresholdTip: '阈值越大，聚类越少。',
      maxClusterTip: '最大聚类数。',
      entityTypes: '实体类型',
    },
    chunk: {
      chunk: '解析块',
      bulk: '批量',
      selectAll: '选择所有',
      enabledSelected: '启用选定的',
      disabledSelected: '禁用选定的',
      deleteSelected: '删除选定的',
      search: '搜索',
      all: '所有',
      enabled: '启用',
      disabled: '禁用的',
      keyword: '关键词',
      function: '函数',
      chunkMessage: '请输入值！',
      full: '全文',
      ellipse: '省略',
      graph: '知识图谱',
      mind: '思维导图',
    },
    chat: {
      newConversation: '新会话',
      createAssistant: '新建助理',
      assistantSetting: '助理设置',
      promptEngine: '提示引擎',
      modelSetting: '模型设置',
      chat: '聊天',
      newChat: '新建聊天',
      send: '发送',
      sendPlaceholder: '消息概要助手...',
      chatConfiguration: '聊天配置',
      chatConfigurationDescription: '在这里，为你的专业知识库装扮专属助手！ 💕',
      assistantName: '助理姓名',
      assistantNameMessage: '助理姓名是必填项',
      namePlaceholder: '例如 贾维斯简历',
      assistantAvatar: '助理头像',
      language: '语言',
      emptyResponse: '空回复',
      emptyResponseTip: `如果在知识库中没有检索到用户的问题，它将使用它作为答案。 如果您希望 LLM 在未检索到任何内容时提出自己的意见，请将此留空。`,
      setAnOpener: '设置开场白',
      setAnOpenerInitial: `你好！ 我是你的助理，有什么可以帮到你的吗？`,
      setAnOpenerTip: '您想如何欢迎您的客户？',
      knowledgeBases: '知识库',
      knowledgeBasesMessage: '请选择',
      knowledgeBasesTip: '选择关联的知识库。',
      system: '系统',
      systemInitialValue: `你是一个智能助手，请总结知识库的内容来回答问题，请列举知识库中的数据详细回答。当所有知识库内容都与问题无关时，你的回答必须包括“知识库中未找到您要的答案！”这句话。回答需要考虑聊天历史。
        以下是知识库：
        {knowledge}
        以上是知识库。`,
      systemMessage: '请输入',
      systemTip:
        '当LLM回答问题时，你需要LLM遵循的说明，比如角色设计、答案长度和答案语言等。',
      topN: 'Top N',
      topNTip: `并非所有相似度得分高于“相似度阈值”的块都会被提供给大语言模型。 LLM 只能看到这些“Top N”块。`,
      variable: '变量',
      variableTip: `如果您使用对话 API，变量可能会帮助您使用不同的策略与客户聊天。
      这些变量用于填写提示中的“系统”部分，以便给LLM一个提示。
      “知识”是一个非常特殊的变量，它将用检索到的块填充。
      “System”中的所有变量都应该用大括号括起来。`,
      add: '新增',
      key: '关键字',
      optional: '可选的',
      operation: '操作',
      model: '模型',
      modelTip: '大语言聊天模型',
      modelMessage: '请选择',
      freedom: '自由',
      improvise: '即兴创作',
      precise: '精确',
      balance: '平衡',
      freedomTip: `“精确”意味着大语言模型会保守并谨慎地回答你的问题。 “即兴发挥”意味着你希望大语言模型能够自由地畅所欲言。 “平衡”是谨慎与自由之间的平衡。`,
      temperature: '温度',
      temperatureMessage: '温度是必填项',
      temperatureTip:
        '该参数控制模型预测的随机性。 较低的温度使模型对其响应更有信心，而较高的温度则使其更具创造性和多样性。',
      topP: 'Top P',
      topPMessage: 'Top P 是必填项',
      topPTip:
        '该参数也称为“核心采样”，它设置一个阈值来选择较小的单词集进行采样。 它专注于最可能的单词，剔除不太可能的单词。',
      presencePenalty: '出席处罚',
      presencePenaltyMessage: '出席处罚是必填项',
      presencePenaltyTip:
        '这会通过惩罚对话中已经出现的单词来阻止模型重复相同的信息。',
      frequencyPenalty: '频率惩罚',
      frequencyPenaltyMessage: '频率惩罚是必填项',
      frequencyPenaltyTip:
        '与存在惩罚类似，这减少了模型频繁重复相同单词的倾向。',
      maxTokens: '最大token数',
      maxTokensMessage: '最大token数是必填项',
      maxTokensTip:
        '这设置了模型输出的最大长度，以标记（单词或单词片段）的数量来衡量。',
      quote: '显示引文',
      quoteTip: '是否应该显示原文出处？',
      selfRag: 'Self-RAG',
      selfRagTip: '请参考: https://huggingface.co/papers/2310.11511',
      overview: '聊天 ID',
      pv: '消息数',
      uv: '活跃用户数',
      speed: 'Token 输出速度',
      tokens: '消耗Token数',
      round: '会话互动数',
      thumbUp: '用户满意度',
      preview: '预览',
      embedded: '嵌入',
      serviceApiEndpoint: '服务API端点',
      apiKey: 'API KEY',
      apiReference: 'API 文档',
      dateRange: '日期范围：',
      backendServiceApi: 'API 服务器',
      createNewKey: '创建新密钥',
      created: '创建于',
      action: '操作',
      embedModalTitle: '嵌入网站',
      comingSoon: '即将推出',
      fullScreenTitle: '全屏嵌入',
      fullScreenDescription: '将以下iframe嵌入您的网站处于所需位置',
      partialTitle: '部分嵌入',
      extensionTitle: 'Chrome 插件',
      tokenError: '请先创建 API Token!',
      searching: '搜索中',
      parsing: '解析中',
      uploading: '上传中',
      uploadFailed: '上传失败',
      regenerate: '重新生成',
      read: '朗读内容',
      tts: '文本转语音',
      ttsTip: '是否用语音转换播放语音，请先在设置里面选择TTS（语音转换模型）。',
      relatedQuestion: '相关问题',
      answerTitle: '智能回答',
      multiTurn: '多轮对话优化',
      multiTurnTip:
        '在多轮对话的中，对去知识库查询的问题进行优化。会调用大模型额外消耗token。',
    },
    setting: {
      profile: '概要',
      profileDescription: '在此更新您的照片和个人详细信息。',
      password: '密码',
      passwordDescription: '请输入您当前的密码以更改您的密码。',
      model: '模型提供商',
      modelDescription: '在此设置模型参数和 API KEY。',
      team: '团队',
      system: '系统',
      logout: '登出',
      username: '用户名',
      usernameMessage: '请输入用户名',
      photo: '头像',
      photoDescription: '这将显示在您的个人资料上。',
      colorSchema: '主题',
      colorSchemaMessage: '请选择您的主题！',
      colorSchemaPlaceholder: '请选择您的主题！',
      bright: '明亮',
      dark: '暗色',
      timezone: '时区',
      timezoneMessage: '请选择时区',
      timezonePlaceholder: '请选择时区',
      email: '邮箱地址',
      emailDescription: '一旦注册，电子邮件将无法更改。',
      currentPassword: '当前密码',
      currentPasswordMessage: '请输入当前密码',
      newPassword: '新密码',
      newPasswordMessage: '请输入新密码',
      newPasswordDescription: '您的新密码必须超过 8 个字符。',
      confirmPassword: '确认新密码',
      confirmPasswordMessage: '请确认新密码',
      confirmPasswordNonMatchMessage: '您输入的新密码不匹配！',
      cancel: '取消',
      addedModels: '添加了的模型',
      modelsToBeAdded: '待添加的模型',
      addTheModel: '添加模型',
      apiKey: 'API-Key',
      apiKeyMessage: '请输入api key（如果是本地部署的模型，请忽略它）',
      apiKeyTip: 'API key可以通过注册相应的LLM供应商来获取。',
      showMoreModels: '展示更多模型',
      baseUrl: 'Base-Url',
      baseUrlTip:
        '如果您的 API 密钥来自 OpenAI，请忽略它。 任何其他中间提供商都会提供带有 API 密钥的基本 URL。',
      modify: '修改',
      systemModelSettings: '系统模型设置',
      chatModel: '聊天模型',
      chatModelTip: '所有新创建的知识库都会使用默认的聊天LLM。',
      ttsModel: 'TTS模型',
      ttsModelTip: '默认的tts模型会被用于在对话过程中请求语音生成时使用',
      embeddingModel: '嵌入模型',
      embeddingModelTip: '所有新创建的知识库都将使用的默认嵌入模型。',
      img2txtModel: 'Img2txt模型',
      img2txtModelTip:
        '所有新创建的知识库都将使用默认的多模块模型。 它可以描述图片或视频。',
      sequence2txtModel: 'Sequence2txt模型',
      sequence2txtModelTip:
        '所有新创建的知识库都将使用默认的 ASR 模型。 使用此模型将语音翻译为相应的文本。',
      rerankModel: 'Rerank模型',
      rerankModelTip: `默认的重读模型用于用户问题检索到重读块。`,
      workspace: '工作空间',
      upgrade: '升级',
      addLlmTitle: '添加 LLM',
      modelName: '模型名称',
      modelID: '模型ID',
      modelUid: '模型UID',
      modelType: '模型类型',
      addLlmBaseUrl: '基础 Url',
      vision: '是否支持 Vision',
      modelNameMessage: '请输入模型名称！',
      modelTypeMessage: '请输入模型类型！',
      baseUrlNameMessage: '请输入基础 Url！',
      ollamaLink: '如何集成 {{name}}',
      FishAudioLink: '如何使用Fish Audio',
      TencentCloudLink: '如何使用腾讯云语音识别',
      volcModelNameMessage: '请输入模型名称！',
      addEndpointID: '模型 EndpointID',
      endpointIDMessage: '请输入模型对应的EndpointID',
      addArkApiKey: '火山 ARK_API_KEY',
      ArkApiKeyMessage: '请输入火山创建的ARK_API_KEY',
      bedrockModelNameMessage: '请输入名称！',
      addBedrockEngineAK: 'ACCESS KEY',
      bedrockAKMessage: '请输入 ACCESS KEY',
      addBedrockSK: 'SECRET KEY',
      bedrockSKMessage: '请输入 SECRET KEY',
      bedrockRegion: 'AWS Region',
      bedrockRegionMessage: '请选择！',
      'us-east-1': '美国东部 (弗吉尼亚北部)',
      'us-west-2': '美国西部 (俄勒冈州)',
      'ap-southeast-1': '亚太地区 (新加坡)',
      'ap-northeast-1': '亚太地区 (东京)',
      'eu-central-1': '欧洲 (法兰克福)',
      'us-gov-west-1': 'AWS GovCloud (US-West)',
      'ap-southeast-2': '亚太地区 (悉尼)',
      addHunyuanSID: '混元 Secret ID',
      HunyuanSIDMessage: '请输入 Secret ID',
      addHunyuanSK: '混元 Secret Key',
      HunyuanSKMessage: '请输入 Secret Key',
      addTencentCloudSID: '腾讯云 Secret ID',
      TencentCloudSIDMessage: '请输入 Secret ID',
      addTencentCloudSK: '腾讯云 Secret Key',
      TencentCloudSKMessage: '请输入 Secret Key',
      SparkModelNameMessage: '请选择星火模型！',
      addSparkAPIPassword: '星火 APIPassword',
      SparkAPIPasswordMessage: '请输入 APIPassword',
      addSparkAPPID: '星火 APPID',
      SparkAPPIDMessage: '请输入 APPID',
      addSparkAPISecret: '星火 APISecret',
      SparkAPISecretMessage: '请输入 APISecret',
      addSparkAPIKey: '星火 APIKey',
      SparkAPIKeyMessage: '请输入 APIKey',
      yiyanModelNameMessage: '请输入模型名称',
      addyiyanAK: '一言 API KEY',
      yiyanAKMessage: '请输入 API KEY',
      addyiyanSK: '一言 Secret KEY',
      yiyanSKMessage: '请输入 Secret KEY',
      FishAudioModelNameMessage: '请为你的TTS模型起名',
      addFishAudioAK: 'Fish Audio API KEY',
      FishAudioAKMessage: '请输入 API KEY',
      addFishAudioRefID: 'FishAudio Refrence ID',
      FishAudioRefIDMessage: '请输入引用模型的ID（留空表示使用默认模型）',
      GoogleModelIDMessage: '请输入 model ID!',
      addGoogleProjectID: 'Project ID',
      GoogleProjectIDMessage: '请输入 Project ID',
      addGoogleServiceAccountKey:
        'Service Account Key(Leave blank if you use Application Default Credentials)',
      GoogleServiceAccountKeyMessage:
        '请输入 Google Cloud Service Account Key in base64 format',
      addGoogleRegion: 'Google Cloud 区域',
      GoogleRegionMessage: '请输入 Google Cloud 区域',
      modelProvidersWarn: `请先在<b>设置 > 模型提供程序</b>中添加嵌入模型和 LLM。然后在“系统模型设置”中设置它们。`,
      apiVersion: 'API版本',
      apiVersionMessage: '请输入API版本!',
      add: '添加',
      updateDate: '更新日期',
      role: '角色',
      invite: '邀请',
      agree: '同意',
      refuse: '拒绝',
      teamMembers: '团队成员',
      joinedTeams: '加入的团队',
    },
    message: {
      registered: '注册成功',
      logout: '登出成功',
      logged: '登录成功',
      pleaseSelectChunk: '请选择解析块',
      modified: '更新成功',
      created: '创建成功',
      deleted: '删除成功',
      renamed: '重命名成功',
      operated: '操作成功',
      updated: '更新成功',
      uploaded: '上传成功',
      200: '服务器成功返回请求的数据。',
      201: '新建或修改数据成功。',
      202: '一个请求已经进入后台排队（异步任务）。',
      204: '删除数据成功。',
      400: '发出的请求有错误，服务器没有进行新建或修改数据的操作。',
      401: '用户没有权限（Token、用户名、密码错误）。',
      403: '用户得到授权，但是访问是被禁止的。',
      404: '发出的请求针对的是不存在的记录，服务器没有进行操作。',
      406: '请求的格式不可得。',
      410: '请求的资源被永久删除，且不会再得到的。',
      413: '上传的文件总大小过大。',
      422: '当创建一个对象时，发生一个验证错误。',
      500: '服务器发生错误，请检查服务器。',
      502: '网关错误。',
      503: '服务不可用，服务器暂时过载或维护。',
      504: '网关超时。',
      requestError: '请求错误',
      networkAnomalyDescription: '您的网络发生异常，无法连接服务器',
      networkAnomaly: '网络异常',
      hint: '提示',
    },
    fileManager: {
      name: '名称',
      uploadDate: '上传日期',
      knowledgeBase: '知识库',
      size: '大小',
      action: '操作',
      addToKnowledge: '链接知识库',
      pleaseSelect: '请选择',
      newFolder: '新建文件夹',
      uploadFile: '上传文件',
      uploadTitle: '点击或拖拽文件至此区域即可上传',
      uploadDescription:
        '支持单次或批量上传。 严禁上传公司数据或其他违禁文件。',
      file: '文件',
      directory: '文件夹',
      local: '本地上传',
      s3: 'S3 上传',
      preview: '预览',
      fileError: '文件错误',
      uploadLimit: '文件大小不能超过10M，文件总数不超过128个',
      destinationFolder: '目标文件夹',
    },
    flow: {
      flow: '工作流',
      cite: '引用',
      citeTip: '引用',
      name: '名称',
      nameMessage: '请输入名称',
      description: '描述',
      examples: '示例',
      to: '下一步',
      msg: '消息',
      messagePlaceholder: '消息',
      messageMsg: '请输入消息或删除此字段。',
      addField: '新增字段',
      addMessage: '新增消息',
      loop: '循环上限',
      loopTip:
        'loop为当前组件循环次数上限，当循环次数超过loop的值时，说明组件不能完成当前任务，请重新优化agent',
      yes: '是',
      no: '否',
      key: 'key',
      componentId: '组件ID',
      add: '新增',
      operation: '操作',
      run: '运行',
      save: '保存',
      title: 'ID：',
      beginDescription: '这是流程开始的地方',
      answerDescription: `该组件用作机器人与人类之间的接口。它接收用户的输入并显示机器人的计算结果。`,
      retrievalDescription: `此组件用于从知识库中检索相关信息。选择知识库。如果没有检索到任何内容，将返回“空响应”。`,
      generateDescription: `此组件用于调用LLM生成文本，请注意提示的设置。`,
      categorizeDescription: `此组件用于对文本进行分类。请指定类别的名称、描述和示例。每个类别都指向不同的下游组件。`,
      relevantDescription: `该组件用来判断upstream的输出是否与用户最新的问题相关，‘是’代表相关，‘否’代表不相关。`,
      rewriteQuestionDescription: `此组件用于细化用户的提问。通常，当用户的原始提问无法从知识库中检索到相关信息时，此组件可帮助您将问题更改为更符合知识库表达方式的适当问题。只有“检索”可作为其下游。`,
      messageDescription:
        '此组件用于向用户发送静态信息。您可以准备几条消息，这些消息将被随机选择。',
      keywordDescription: `该组件用于从用户的问题中提取关键词。Top N指定需要提取的关键词数量。`,
      switchDescription: `该组件用于根据前面组件的输出评估条件，并相应地引导执行流程。通过定义各种情况并指定操作，或在不满足条件时采取默认操作，实现复杂的分支逻辑。`,
      wikipediaDescription: `此组件用于从 https://www.wikipedia.org/ 获取搜索结果。通常，它作为知识库的补充。Top N 指定您需要调整的搜索结果数量。`,
      promptText: `请总结以下段落。注意数字，不要胡编乱造。段落如下：
{input}
以上就是你需要总结的内容。`,
      createGraph: '创建 Agent',
      createFromTemplates: '从模板创建',
      retrieval: '知识检索',
      generate: '生成回答',
      answer: '人机交互',
      categorize: '问题分类',
      relevant: '是否相关',
      rewriteQuestion: '问题优化',
      begin: '开始',
      message: '静态消息',
      blank: '空',
      createFromNothing: '从无到有',
      addItem: '新增',
      addSubItem: '新增子项',
      nameRequiredMsg: '名称不能为空',
      nameRepeatedMsg: '名称不能重复',
      keywordExtract: '关键词',
      keywordExtractDescription: `该组件用于从用户的问题中提取关键词。Top N指定需要提取的关键词数量。`,
      baidu: '百度',
      baiduDescription: `此组件用于从 www.baidu.com 获取搜索结果。通常，它作为知识库的补充。Top N 指定您需要调整的搜索结果数量。`,
      duckDuckGo: 'DuckDuckGo',
      duckDuckGoDescription:
        '此元件用於從 www.duckduckgo.com 取得搜尋結果。通常，它作為知識庫的補充。 Top N 指定您需要調整的搜尋結果數。',
      channel: '频道',
      channelTip: '针对该组件的输入进行文本搜索或新闻搜索',
      text: '文本',
      news: '新闻',
      messageHistoryWindowSize: '历史消息窗口大小',
      messageHistoryWindowSizeTip:
        'LLM 需要查看的对话历史窗口大小。越大越好。但要注意 LLM 的最大内容长度。',
      wikipedia: '维基百科',
      emailTip:
        '此组件用于从 https://pubmed.ncbi.nlm.nih.gov/ 获取搜索结果。通常，它作为知识库的补充。Top N 指定您需要调整的搜索结果数。电子邮件是必填字段。',
      email: '邮箱',
      pubMed: 'PubMed',
      pubMedDescription:
        '此组件用于从 https://pubmed.ncbi.nlm.nih.gov/ 获取搜索结果。通常，它作为知识库的补充。Top N 指定您需要调整的搜索结果数。电子邮件是必填字段。',
      arXiv: 'ArXiv',
      arXivDescription:
        '此组件用于从 https://arxiv.org/ 获取搜索结果。通常，它作为知识库的补充。Top N 指定您需要调整的搜索结果数量。',
      sortBy: '排序方式',
      submittedDate: '提交日期',
      lastUpdatedDate: '最后更新日期',
      relevance: '关联',
      google: 'Google',
      googleDescription:
        '此组件用于从https://www.google.com/获取搜索结果。通常，它作为知识库的补充。Top N 和 SerpApi API 密钥指定您需要调整的搜索结果数量。',
      bing: 'Bing',
      bingDescription:
        '此组件用于从 https://www.bing.com/ 获取搜索结果。通常，它作为知识库的补充。Top N 和 Bing Subscription-Key 指定您需要调整的搜索结果数量。',
      apiKey: 'API KEY',
      country: '国家',
      language: '语言',
      googleScholar: '谷歌学术',
      googleScholarDescription: `此组件用于从 https://scholar.google.com/ 获取搜索结果。通常，它作为知识库的补充。Top N 指定您需要调整的搜索结果数量。`,
      yearLow: '开始年份',
      yearHigh: '结束年份',
      patents: '专利',
      data: '数据',
      deepL: 'DeepL',
      deepLDescription:
        '该组件用于从 https://www.deepl.com/ 获取翻译。通常，它提供更专业的翻译结果。',
      authKey: '授权键',
      sourceLang: '源语言',
      targetLang: '目标语言',
      gitHub: 'GitHub',
      githubDescription:
        '该组件用于从 https://github.com/ 搜索仓库。Top N 指定需要调整的搜索结果数量。',
      baiduFanyi: '百度翻译',
      baiduFanyiDescription:
        '该组件用于从 https://fanyi.baidu.com/ 获取翻译。通常，它提供更专业的翻译结果',
      appid: 'App id',
      secretKey: '秘钥',
      domain: '领域',
      transType: '翻译类型',
      baiduSecretKeyOptions: {
        translate: '通用翻译',
        fieldtranslate: '领域翻译',
      },
      baiduDomainOptions: {
        it: '信息技术领域',
        finance: '金融财经领域',
        machinery: '机械制造领域',
        senimed: '生物医药领域',
        novel: '网络文学领域',
        academic: '学术论文领域',
        aerospace: '航空航天领域',
        wiki: '人文社科领域',
        news: '新闻资讯领域',
        law: '法律法规领域',
        contract: '合同领域',
      },
      baiduSourceLangOptions: {
        auto: '自动检测',
        zh: '中文',
        en: '英语',
        yue: '粤语',
        wyw: '文言文',
        jp: '日语',
        kor: '韩语',
        fra: '法语',
        spa: '西班牙语',
        th: '泰语',
        ara: '阿拉伯语',
        ru: '俄语',
        pt: '葡萄牙语',
        de: '德语',
        it: '意大利语',
        el: '希腊语',
        nl: '荷兰语',
        pl: '波兰语',
        bul: '保加利亚语',
        est: '爱沙尼亚语',
        dan: '丹麦语',
        fin: '芬兰语',
        cs: '捷克语',
        rom: '罗马尼亚语',
        slo: '斯洛文尼亚语',
        swe: '瑞典语',
        hu: '匈牙利语',
        cht: '繁体中文',
        vie: '越南语',
      },
      qWeather: '和风天气',
      qWeatherDescription:
        '该组件用于从 https://www.qweather.com/ 获取天气相关信息。您可以获取天气、指数、空气质量。',
      lang: '语言',
      type: '类型',
      webApiKey: 'Web API 密钥',
      userType: '用户类型',
      timePeriod: '时间段',
      qWeatherLangOptions: {
        zh: '简体中文',
        'zh-hant': '繁体中文',
        en: '英文',
        de: '德语',
        es: '西班牙语',
        fr: '法语',
        it: '意大利语',
        ja: '日语',
        ko: '韩语',
        ru: '俄语',
        hi: '印地语',
        th: '泰语',
        ar: '阿拉伯语',
        pt: '葡萄牙语',
        bn: '孟加拉语',
        ms: '马来语',
        nl: '荷兰语',
        el: '希腊语',
        la: '拉丁语',
        sv: '瑞典语',
        id: '印尼语',
        pl: '波兰语',
        tr: '土耳其语',
        cs: '捷克语',
        et: '爱沙尼亚语',
        vi: '越南语',
        fil: '菲律宾语',
        fi: '芬兰语',
        he: '希伯来语',
        is: '冰岛语',
        nb: '挪威语',
      },
      qWeatherTypeOptions: {
        weather: '天气预报',
        indices: '天气生活指数',
        airquality: '空气质量',
      },
      qWeatherUserTypeOptions: {
        free: '免费订阅用户',
        paid: '付费订阅用户',
      },
      qWeatherTimePeriodOptions: {
        now: '现在',
        '3d': '3天',
        '7d': '7天',
        '10d': '10天',
        '15d': '12天',
        '30d': '30天',
      },
      publish: 'API',
      exeSQL: 'ExeSQL',
      exeSQLDescription:
        '该组件通过SQL语句从相应的关系数据库中查询结果。支持MySQL，PostgreSQL，MariaDB。',
      dbType: '数据库类型',
      database: '数据库',
      username: '用户名',
      host: '主机',
      port: '端口',
      password: '密码',
      switch: '条件',
      logicalOperator: '操作符',
      switchOperatorOptions: {
        equal: '等于',
        notEqual: '不等于',
        gt: '大于',
        ge: '大于等于',
        lt: '小于',
        le: '小于等于',
        contains: '包含',
        notContains: '不包含',
        startWith: '开始是',
        endWith: '结束是',
        empty: '为空',
        notEmpty: '不为空',
      },
      switchLogicOperatorOptions: {
        and: '与',
        or: '或',
      },
      operator: '操作符',
      value: '值',
      useTemplate: '使用该模板',
      wenCai: '问财',
      queryType: '查询类型',
      wenCaiDescription:
        '该组件可用于获取广泛金融领域的信息，包括但不限于股票、基金等...',
      wenCaiQueryTypeOptions: {
        stock: '股票',
        zhishu: '指数',
        fund: '基金',
        hkstock: '港股',
        usstock: '美股',
        threeboard: '新三板',
        conbond: '可转债',
        insurance: '保险',
        futures: '期货',
        lccp: '理财',
        foreign_exchange: '外汇',
      },
      akShare: 'AkShare',
      akShareDescription: '该组件可用于从东方财富网站获取相应股票的新闻信息。',
      yahooFinance: '雅虎财经',
      yahooFinanceDescription: '该组件根据提供的股票代码查询有关公司的信息。',
      crawler: '网页爬虫',
      crawlerDescription: '该组件可用于从指定url爬取html源码。',
      proxy: '代理',
      crawlerResultOptions: {
        html: 'Html',
        markdown: 'Markdown',
        content: '文本',
      },
      extractType: '提取类型',
      info: '信息',
      history: '历史',
      financials: '财务',
      balanceSheet: '资产负债表',
      cashFlowStatement: '现金流量表',
      jin10: '金十',
      jin10Description:
        '该组件可用于从金十开放平台获取金融领域的信息，包括快讯、日历、行情、参考。',
      flashType: '闪光类型',
      filter: '筛选',
      contain: '包含',
      calendarType: '日历类型',
      calendarDatashape: '日历数据形状',
      symbolsDatatype: '符号数据类型',
      symbolsType: '符号类型',
      jin10TypeOptions: {
        flash: '快讯',
        calendar: '日历',
        symbols: '行情',
        news: '参考',
      },
      jin10FlashTypeOptions: {
        '1': '市场快讯',
        '2': '期货快讯',
        '3': '美港快讯',
        '4': 'A股快讯',
        '5': '商品外汇快讯',
      },
      jin10CalendarTypeOptions: {
        cj: '宏观数据日历',
        qh: '期货日历',
        hk: '港股日历',
        us: '美股日历',
      },
      jin10CalendarDatashapeOptions: {
        data: '数据',
        event: ' 事件',
        holiday: '假期',
      },
      jin10SymbolsTypeOptions: {
        GOODS: '商品行情',
        FOREX: '外汇行情',
        FUTURE: '国际行情',
        CRYPTO: '加密货币行情',
      },
      jin10SymbolsDatatypeOptions: {
        symbols: '品种列表',
        quotes: '最新行情',
      },
      concentrator: '集线器',
      concentratorDescription:
        '该组件可用于连接多个下游组件。它接收来自上游组件的输入并将其传递给每个下游组件。',
      tuShare: 'TuShare',
      tuShareDescription:
        '该组件可用于从主流金融网站获取金融新闻简报，辅助行业和量化研究。',
      tuShareSrcOptions: {
        sina: '新浪财经',
        wallstreetcn: '华尔街见闻',
        '10jqka': '同花顺',
        eastmoney: '东方财富',
        yuncaijing: '云财经',
        fenghuang: '凤凰新闻',
        jinrongjie: '金融界',
      },
      token: 'Token',
      src: '源',
      startDate: '开始日期',
      endDate: '结束日期',
      keyword: '关键字',
      note: '注释',
      noteDescription: '注释',
      notePlaceholder: '请输入注释',
      invoke: 'Invoke',
      invokeDescription:
        '该组件可以调用远程端点调用。将其他组件的输出作为参数或设置常量参数来调用远程函数。',
      url: 'Url',
      method: '方法',
      timeout: '超时',
      headers: '请求头',
      cleanHtml: '清除 HTML',
      cleanHtmlTip: '如果响应是 HTML 格式且只需要主要内容，请将其打开。',
      reference: '引用',
      input: '输入',
      parameter: '参数',
    },
    footer: {
      profile: 'All rights reserved @ React',
    },
    layout: {
      file: 'file',
      knowledge: 'knowledge',
      chat: 'chat',
    },
  },
};

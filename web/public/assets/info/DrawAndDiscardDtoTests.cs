#region Editor

// ---------------------------------
// Class : DrawAndDiscardDtoTests
// Creator : Electric Arc( Yu chenhaoran)
// Co-Workers : None
// Create Date : TIME
// File Version : v 1.0.0
// ---------------------------------

#endregion

using Enums.ReactEnums;
using Exceptions;
using Logic.DTO;
using Logic.Enums;
using NUnit.Framework;

namespace Tests
{
    [TestFixture]
    public class DrawAndDiscardDtoTests
    {
        [Test]
        public void SerializeAndDeserializeTest()
        {
            // Arrange
            var dto = new DrawAndDiscardDto(EDrawType.One, EDiscardType.One);

            // Act
            var serializedData = dto.Serialize();
            var deserializedData = new DrawAndDiscardDto(serializedData).Deserialize();

            // Assert
            Assert.AreEqual(EDrawType.One, deserializedData.Item1);
            Assert.AreEqual(EDiscardType.One, deserializedData.Item2);
        }

        [Test]
        public void Serialize_NullObject_ThrowsException()
        {
            // Arrange
            var dto = new DrawAndDiscardDto((EDrawType)(-1),(EDiscardType)(-1));

            // Act & Assert
            dto.Serialize();
        }

        [Test]
        public void Deserialize_NullObject_ThrowsException()
        {
            // Arrange
            var dto = new DrawAndDiscardDto(new byte[] { });

            // Act & Assert
            Assert.Throws<TryToDeserializeANullObjectException>(() => dto.Deserialize());
        }
    }
}